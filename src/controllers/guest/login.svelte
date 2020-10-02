<script>
	import UserCommon from '../common/user.js';
	const CLASS_ERR = UserCommon.CLASS_ERR;
	const CLASS_OK = UserCommon.CLASS_OK;

	import LockBlockComponent from './lock.block.svelte';
	import {createEventDispatcher} from 'svelte';

	let dispatch = createEventDispatcher();

	let errorMessage = false;
	let formErrors = false;
	let success = false;

	let validationErrors = {
		tel: false,
		username: false,
		email: false,
		password: false,
		code: false
	};

	/*
		login
		requestLoginByEmail
		requestLoginBySMS
		loginByCode
	*/

	export const  MODES = [
		'login',
		'requestLoginCodeOnEmail',
		'requestLoginCodeOnTelephone',
		'loginByCode'
		];

	export const  MODES_FIELDS = {
		'login': ['username', 'email', 'password'],
		'requestLoginCodeOnEmail': ['email'],
		'requestLoginCodeOnTelephone': ['tel'],
		'loginByCode': ['code']
	};

	export const SUCCESS_TEXT = {
		'login': 'Вход выполнен',
		'requestLoginCodeOnEmail': 'На ваш email было отправлено письмо с кодом',
		'requestLoginCodeOnTelephone': 'Вам было отправлено SMS сообщение с кодом',
		'loginByCode': 'Вход по коду выполнен'
	};

	export let mode = 'login';
	export let loading = false;
	//export let user = {};
	export let formValid = false;

	export let title = {
		__enabled: true,
		login: 'Вход',
		requestLoginCodeOnEmail: 'Вход по email',
		requestLoginCodeOnTelephone: 'Вход по SMS',
		loginByCode: 'Вход по коду'
	};

	export let description = {
		__enabled: true,
		login: 				'Введите ваш логин и пароль',
		requestLoginCodeOnEmail: 'Введите ваш email адрес, вам будет выслан одноразовый код для входа',
		requestLoginCodeOnTelephone: 'Введите ваш номер телефона, вам будет выслан одноразовый код для входа',
		loginByCode: 'Вход по одноразовому коду'
	};

	export let tel = UserCommon.fieldInit('tel');
	export let email = UserCommon.fieldInit('email');
	export let code = UserCommon.fieldInit('code');
	export let username = UserCommon.fieldInit('username', {enabled: false});
	export let password = UserCommon.fieldInit('password');

	let fields = {username, password, tel, code, email};

	export let submit = {
		caption: 'Отправить',
		enabled: true
	};

	export let cancel = {
		caption: 'Назад',
		enabled: true
	};

	export function setMode(newMode){
		if(MODES.indexOf(newMode)>-1){
			mode = newMode;
			validateForm();
		}
	}

	let setModeBind = {};
	MODES.forEach((thisMode)=>{
		setModeBind[thisMode] = setMode.bind(this, thisMode);
	});

	export let redirectSuccess = '/';
	export let resultShowtime = 5000;

	export let validation = true;

	function collectData(){
		return {
			tel: tel.enabled?tel.value:undefined,
			username: username.enabled?username.value:undefined,
			email: email.enabled?email.value:undefined,
			code: code.enabled?code.value:undefined,
			password: password.enabled?password.value:undefined
		};
	}

	export let resolveLogin = () => {};

	function onSuccess(res){
		stage = 'success';
		setTimeout(()=>{
			if(redirectSuccess){
				document.location.href = redirectSuccess;
			}else{
				resolveLogin(res);
			}
		}, resultShowtime);
	}

	function onChange(ev){
		let data = {
			field: ev.target.name,
			value: ev.target.value
		};
		if(validation){
			let res = UserCommon.validateField(data.field, data.value, fields);
			if(res === true){
				setFieldValid(data.field);
			}else{
				setFieldInvalid(data.field, res);
			}
			validateForm(data);
		}else{
			dispatch('change', data);
		}
	}

	export function setFieldInvalid(fieldName, errors){
		validationErrors[fieldName] = errors;
		validationErrors = validationErrors
		formErrors = true;
	}

	export function setFieldValid(fieldName){
		validationErrors[fieldName] = false;
		formErrors = Object.values(validationErrors).some((val) => {return val;});
	}

	function onInput(ev){
		let data = {
			field: ev.target.name,
			input: ev.data,
			value: ev.target.value
		};
		if(validation){
			let res = UserCommon.validateField(data.field, data.value, fields);
			if(res === true){
				setFieldValid(data.field);
			}else{
				setFieldInvalid(data.field, res);
			}
			validateForm(data);
		}else{
			dispatch('input', data);
		}
	}

	function validateForm(freshData){
		if(MODES.indexOf(mode) > -1){
			let fieldsList = MODES_FIELDS[mode];
			let result = true;
			fieldsList.forEach((fieldName) => {
				if (fields[fieldName].enabled && fields[fieldName].required){
					let val = (freshData && (freshData.field === fieldName))?freshData.value:fields[fieldName].value;
					if (Array.isArray(UserCommon.validateField(fieldName, val, fields))){
						result = false;
					}
				}
			});
			formValid = result;
			return result;
		}else{
			formValid = false;
			return false;
		}
	}

	export function setFormError(error){
		formValid = false;
		console.log('form error', error);
		errorMessage = Array.isArray(error)?error.join(', '):error;
	}

	export let tryModeAction = (e)=>{
		e && e.preventDefault();
		errorMessage = false;
		dispatch(mode, collectData());
		return false;
	};

	export function showSuccess(){
		success = true;
	}

	export let rejectLogin = ()=>{
		loading = true;
		dispatch('rejectLogin');
	}

	export function setLoading(){
		loading = true;
	}

	export function resetLoading(){
		loading = false;
	}

	$: telHelper = validationErrors.tel?validationErrors.tel.join(', '):tel.placeholder;
	$: telClasses = validationErrors.tel?CLASS_ERR:CLASS_OK;

	$: usernameHelper = validationErrors.username?validationErrors.username.join(', '):username.placeholder;
	$: usernameClasses = validationErrors.username?CLASS_ERR:CLASS_OK;

	$: codeHelper = validationErrors.code?validationErrors.code.join(', '):code.placeholder;
	$: codeClasses = validationErrors.code?CLASS_ERR:CLASS_OK;

	$: emailHelper = validationErrors.email?validationErrors.email.join(', '):email.placeholder;
	$: emailClasses = validationErrors.email?CLASS_ERR:CLASS_OK;

	$: passwordHelper = validationErrors.password?validationErrors.password.join(', '):password.placeholder;
	$: passwordClasses = validationErrors.password?CLASS_ERR:CLASS_OK;

	$:submitClasses = loading?'is-loading':'';

	$: formInvalid = (formValid === false);

</script>

<div class="block-container">
	<!--<LockBlockComponent bind:enable={loading}></LockBlockComponent>-->
	<div class="tile user-login-form-paper">
			{#if success}
			<div class="notification is-success">
  			<h3 class="user-form-success-message">{SUCCESS_TEXT[mode]}</h3>
			</div>
			{:else}
			<div class="user-login-form">
				{#if title.__enabled}
				<h5 class="title">{title[mode]}</h5>
				{/if}
				{#if description.__enabled}
				<h6 class="subtitle is-6">{description[mode]}</h6>
				{/if}
				{#if mode=='login'}
				{#if email.enabled}
				<div class="user-form-field user-login-form-email field">
					<label class="label">{email.label}</label>
  				<div class="control has-icons-left has-icons-right">
    				<input class="input {emailClasses}"
							bind:value={email.value}
							required={email.required}
							placeholder="{email.placeholder}"
						 	invalid="{validationErrors.email}"
							on:change={onChange} on:input={onInput}
							name="email" type="email"
							autocomplete="email"
							aria-controls="input-field-helper-email"
							aria-describedby="input-field-helper-email"
							/>
    				<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
    				<span class="icon is-small is-right">
							{#if validationErrors.email}
							<i class="fas fa-exclamation-triangle"></i>
							{:else}
							<i class="fas fa-check"></i>
							{/if}
						</span>
  				</div>
  				<p class="help {emailClasses}" id="input-field-helper-email">{emailHelper}</p>
				</div>
				{/if}
				{#if username.enabled}
				<div class="field user-form-field user-login-form-username">
  				<label class="label">{username.label}</label>
  				<div class="control has-icons-left has-icons-right">
    				<input class="input {usernameClasses}"
							type="text"
							name="username"
							invalid="{validationErrors.username}"
							required={username.required}
							placeholder="{username.placeholder}"
							bind:value={username.value}
							on:change={onChange}
							on:input={onInput}
							autocomplete="username"
							aria-controls="input-field-helper-username"
							aria-describedby="input-field-helper-username"
							/>
    				<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
    				<span class="icon is-small is-right">
							{#if validationErrors.username}
							<i class="fas fa-exclamation-triangle"></i>
							{:else}
							<i class="fas fa-check"></i>
							{/if}
						</span>
  				</div>
  				<p class="help {usernameClasses}" id="input-field-helper-username">{usernameHelper}</p>
				</div>
				{/if}
				{#if password.enabled}
				<div class="field user-form-field user-login-form-password">
  				<label class="label">{password.label}</label>
  				<div class="control has-icons-left has-icons-right">
    				<input class="input {passwordClasses}"
							type="password"
							name="password"
							invalid="{validationErrors.password}"
							required={password.required}
							placeholder="{password.placeholder}"
							bind:value={password.value}
							on:change={onChange}
							on:input={onInput}
							autocomplete="password"
							aria-controls="input-field-helper-password"
							aria-describedby="input-field-helper-password"
							/>
    				<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
  				</div>
  				<p class="help {passwordClasses}" id="input-field-helper-password">{passwordHelper}</p>
				</div>
				{/if}
				{/if}
				{#if mode=='requestLoginCodeOnEmail'}
				<div class="field user-form-field user-login-form-email">
  				<label class="label">{email.label}</label>
  				<div class="control has-icons-left has-icons-right">
    				<input class="input {emailClasses}"
							type="email"
							name="email"
							invalid="{validationErrors.email}"
							required={email.required}
							placeholder="{email.placeholder}"
							bind:value={email.value}
							on:change={onChange}
							on:input={onInput}
							autocomplete="email"
							aria-controls="input-field-helper-email"
							aria-describedby="input-field-helper-email"
							/>
    				<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
    				<span class="icon is-small is-right">
							{#if validationErrors.email}
							<i class="fas fa-exclamation-triangle"></i>
							{:else}
							<i class="fas fa-check"></i>
							{/if}
						</span>
  				</div>
  				<p class="help {emailClasses}" id="input-field-helper-login">{emailHelper}</p>
				</div>
				{/if}

				{#if mode=='requestLoginCodeOnTelephone'}
				<div class="field user-form-field user-login-form-tel">
  				<label class="label">{tel.label}</label>
  				<div class="control has-icons-left has-icons-right">
    				<input class="input {telClasses}"
							type="tel"
							name="tel"
							invalid="{validationErrors.tel}"
							required={tel.required}
							placeholder="{tel.placeholder}"
							bind:value={tel.value}
							on:change={onChange}
							on:input={onInput}
							autocomplete="tel"
							aria-controls="input-field-helper-tel"
							aria-describedby="input-field-helper-tel"
							/>
    				<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
    				<span class="icon is-small is-right">
							{#if validationErrors.tel}
							<i class="fas fa-exclamation-triangle"></i>
							{:else}
							<i class="fas fa-check"></i>
							{/if}
						</span>
  				</div>
  				<p class="help {telClasses}" id="input-field-helper-tel">{telHelper}</p>
				</div>
				{/if}

				{#if mode=='loginByCode'}
				<div class="field user-form-field user-login-form-code">
  				<label class="label">{code.label}</label>
  				<div class="control has-icons-left has-icons-right">
    				<input class="input {codeClasses}"
							type="text"
							name="code"
							invalid="{validationErrors.code}"
							required={true}
							placeholder="{code.placeholder}"
							bind:value={code.value}
							on:change={onChange}
							on:input={onInput}
							autocomplete="code"
							aria-controls="input-field-helper-code"
							aria-describedby="input-field-helper-code"
							/>
    				<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
    				<span class="icon is-small is-right">
							{#if validationErrors.code}
							<i class="fas fa-exclamation-triangle"></i>
							{:else}
							<i class="fas fa-check"></i>
							{/if}
						</span>
  				</div>
  				<p class="help {codeClasses}" id="input-field-helper-code">{codeHelper}</p>
				</div>
				{/if}

				{#if errorMessage!=false }
				<div class="user-form-error notification is-danger">{errorMessage}</div>
				{/if}

				<div class="buttons-row">
					{#if cancel.enabled}
					<button class="button is-outlined user-login-form-cancel" on:click={rejectLogin}>{cancel.caption}</button>
					{/if}
					{#if submit.enabled}
					<button on:click={tryModeAction} disabled={formInvalid} class="{submitClasses} button is-primary is-hovered user-login-form-submit pull-right">{submit.caption}</button>
					{/if}
				</div>
				<div class="buttons-row-2 field has-addons">
					{#each MODES as thisMode}
					{#if mode != thisMode}
					<p class="control">
						<button class="user-form-{thisMode} button is-outlined is-link"  on:click={setModeBind[thisMode]}>{title[thisMode]}</button>
  				</p>
					{/if}
					{/each}
				</div>
			</div>
			{/if}
	</div>
</div>

<style>
	.help{
		min-height: 1em;
	}
	.user-login-form-paper-head{
		display: block;
		width: 100%;
	}

	.user-login-form{
		display: block;
		width: 100%;
	}

	.block-container {
		position: relative;
		max-width: 600px;
		max-height: 600px;
		padding: 2em;
	}

	.centered {
		text-align: center;
		display: block;
		margin: auto auto;
		position: relative;
		height: auto;
	}

	.buttons-row-2 {
		margin-top: 1em;
	}

	.user-form-field {
		margin-bottom: 0.5em;
	}

	.user-form-error {
		margin-top: 1em;
		color: red;
	}
</style>
