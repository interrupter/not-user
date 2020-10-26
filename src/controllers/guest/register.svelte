<script>

	import UserCommon from '../common/user.js';
	const CLASS_ERR = UserCommon.CLASS_ERR;
	const CLASS_OK = UserCommon.CLASS_OK;

	import LockBlockComponent from './lock.block.svelte';
	let overlay;
	let stage = 'filling';
	let errorMessage = false;
	let formErrors = false;
	let success = false;

	let validationErrors = {
		tel: false,
		username: false,
		email: false,
		password: false,
		password2: false
	};

	export let validation = true;

	export const  MODES = ['register'];

	export const  MODES_FIELDS = {
		'register': ['tel', 'username', 'email', 'password', 'password2'],
	};

	export const SUCCESS_TEXT = {
		'register': 'Для завершения регистрации вам необходимо активировать ваш аккаунт.'
	};

	import {createEventDispatcher} from 'svelte';
	let dispatch = createEventDispatcher();

	export let mode = 'register';
	export let loading = false;
	//export let user = {};
	export let formValid = false;

	export let title = {
		__enabled: true,
		register: 'Регистрация',
	};

	export let description = {
		__enabled: true,
		register:  'Заполните пожалуйств форму',
	};

	//export let closeOnClick = true;
	//export let closeButton = false;
	//export let resultShowtime = 5000;

	//export let redirectSuccess = false;
	//export let redirectFailure = false;

	export let username = UserCommon.fieldInit('username');
	export let password = UserCommon.fieldInit('password');
	export let password2 = UserCommon.fieldInit('password2');
	export let tel = UserCommon.fieldInit('tel');
	export let email = UserCommon.fieldInit('email');

	let fields = {username, password, tel, password2, email};

	export let submit = {
		caption: 'Отправить',
		enabled: true
	};

	export let cancel = {
		caption: 'Назад',
		enabled: true
	};

	function overlayClosed(){
		rejectOrder();
	}

	function collectData(){
		return {
			tel: 				tel.enabled?			tel.value 			:undefined,
			username: 	username.enabled?	username.value 	:undefined,
			email: 			email.enabled?		email.value 		:undefined,
			password: 	password.enabled?	password.value 	:undefined,
			password2: 	password2.enabled?password2.value :undefined
		};
	}

	function onChange(ev){
		let val = ev.target.value;
		if(ev.target.name === 'tel'){
			val = UserCommon.formatPhone(val);
			ev.target.value = val;
		}
		let data = {
			field: ev.target.name,
			value: val
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

	export function fieldIsValid(fieldName){
		return !Array.isArray(validationErrors[fieldName]);
	}

	export function fieldErrorsNotChanged(fieldName, errs){
		let oldErrs = validationErrors[fieldName];
		if(oldErrs === false && errs === false){
			return true;
		}else{
			if(Array.isArray(oldErrs) && Array.isArray(errs)){
				return (oldErrs.join('. ')) === (errs.join('. '));
			}else{
				return false;
			}
		}
	}

	function onInput(ev){
		let res = true;
		let val = ev.target.value;
		if(ev.target.name === 'tel'){
			tel.value = UserCommon.formatPhone(val);
			res = false;
		}
		let data = {
			field: ev.target.name,
			input: ev.data,
			value: val
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
		return res;
	}

	function validateForm(freshData){
		if(MODES.indexOf(mode) > -1){
			let fieldsList = MODES_FIELDS[mode];
			let result = true;
			fieldsList.forEach((fieldName) => {
				if (fields[fieldName].enabled && fields[fieldName].required){
					let val = (freshData && (freshData.field === fieldName))?freshData.value:fields[fieldName].value;
					let errs = UserCommon.validateField(fieldName, val, fields);
					if (Array.isArray(errs)){
						result = false;
					}
					if(!fieldErrorsNotChanged(fieldName, errs)){
						if(Array.isArray(errs)){
							setFieldInvalid(fieldName, errs);
						}else{
							setFieldValid(fieldName);
						}
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

	export let rejectRegister = ()=>{
		loading = true;
		dispatch('rejectRegister');
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

		$: emailHelper = validationErrors.email?validationErrors.email.join(', '):email.placeholder;
		$: emailClasses = validationErrors.email?CLASS_ERR:CLASS_OK;

		$: passwordHelper = validationErrors.password?validationErrors.password.join(', '):password.placeholder;
		$: passwordClasses = validationErrors.password?CLASS_ERR:CLASS_OK;

		$: password2Helper = validationErrors.password2?validationErrors.password2.join(', '):password2.placeholder;
		$: password2Classes = validationErrors.password2?CLASS_ERR:CLASS_OK;

		$: formInvalid = (formValid === false);

</script>

<div class="block-container">
	<!--<LockBlockComponent bind:enable={loading}></LockBlockComponent>-->
	<div class="tile user-register-form-paper">
		{#if success}
		<div class="notification is-success">
			<h3 class="user-form-success-message">{SUCCESS_TEXT[mode]}</h3>
		</div>
		{:else}
		<div class="user-register-form">
			{#if title.__enabled}
			<h5 class="title">{title[mode]}</h5>
			{/if}
			{#if description.__enabled}
			<h6 class="subtitle is-6">{description[mode]}</h6>
			{/if}
			{#if mode=='register'}
			<div class="user-login-form">

				{#if tel.enabled}
				<div class="field user-form-field user-login-form-tel">
					<label class="label" for="user-login-form-tel">{tel.label}</label>
					<div class="control has-icons-left has-icons-right">
						<input class="input {telClasses}"
							id="user-login-form-tel"
							type="tel" name="tel" pattern="\+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" invalid="{validationErrors.tel}"
							required={tel.required} placeholder="{tel.placeholder}"
							bind:value={tel.value} on:change={onChange} on:input={onInput}
							autocomplete="tel" aria-controls="input-field-helper-tel"
						  aria-describedby="input-field-helper-tel" />
						<span class="icon is-small is-left"><i class="fas fa-phone"></i></span>
						{#if tel.validated === true }
						<span class="icon is-small is-right">
							{#if tel.valid}
							<i class="fas fa-check"></i>
							{:else}
							<i class="fas fa-exclamation-triangle"></i>
							{/if}
						</span>
						{/if}
					</div>
					<p class="help {telClasses}" id="input-field-helper-tel">
						{#if (!tel.validated || !tel.valid) }
							{telHelper}
						{:else}&nbsp;{/if}
					</p>
				</div>
				{/if}

				{#if email.enabled}
				<div class="user-form-field user-login-form-email field">
					<label class="label" for="user-login-form-email">{email.label}</label>
					<div class="control has-icons-left has-icons-right">
						<input id="user-login-form-email"
						class="input {emailClasses}" bind:value={email.value} required={email.required} placeholder="{email.placeholder}" invalid="{validationErrors.email}" on:change={onChange} on:input={onInput} name="email" type="email" autocomplete="email"
						  aria-controls="input-field-helper-email" aria-describedby="input-field-helper-email" />
						<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
						{#if email.validated === true }
						<span class="icon is-small is-right">
								{#if email.valid}
								<i class="fas fa-check"></i>
								{:else}
								<i class="fas fa-exclamation-triangle"></i>
								{/if}
						</span>
						{/if}
					</div>

					<p class="help {emailClasses}" id="input-field-helper-email">
						{#if !(email.validated && email.valid) }
						{emailHelper}
						{:else}&nbsp;{/if}
					</p>
				</div>
				{/if}

				{#if username.enabled}
				<div class="field user-form-field user-login-form-username">
					<label class="label" for="user-login-form-username">{username.label}</label>
					<div class="control has-icons-left has-icons-right">
						<input id="user-login-form-username"
						class="input {usernameClasses}" type="text" name="username" invalid="{validationErrors.username}" required={username.required} placeholder="{username.placeholder}" bind:value={username.value} on:change={onChange} on:input={onInput} autocomplete="username"
						  aria-controls="input-field-helper-username" aria-describedby="input-field-helper-username" />
						<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
						{#if username.validated === true }
						<span class="icon is-small is-right">
							{#if username.valid}
							<i class="fas fa-check"></i>
							{:else}
							<i class="fas fa-exclamation-triangle"></i>
							{/if}
						</span>
						{/if}
					</div>
					<p class="help {usernameClasses}" id="input-field-helper-username">
						{#if !(username.validated && username.valid) }{usernameHelper}{:else}&nbsp;{/if}
					</p>
				</div>
				{/if}

				{#if password.enabled}
				<div class="field user-form-field user-login-form-password">
					<label class="label" for="user-login-form-password">{password.label}</label>
					<div class="control has-icons-left has-icons-right">
						<input id="user-login-form-password"
						class="input {passwordClasses}" type="password" name="password" invalid="{validationErrors.password}" required={password.required} placeholder="{password.placeholder}" bind:value={password.value} on:change={onChange} on:input={onInput}
						  autocomplete="password" aria-controls="input-field-helper-password" aria-describedby="input-field-helper-password" />
						<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
						{#if password.validated === true }
						<span class="icon is-small is-right">
							{#if password.valid}
							<i class="fas fa-check"></i>
							{:else}
							<i class="fas fa-exclamation-triangle"></i>
							{/if}
						</span>
						{/if}
					</div>
					<p class="help {passwordClasses}" id="input-field-helper-password">
						{#if !(password.validated && password.valid) }{passwordHelper}{:else}&nbsp;{/if}
					</p>
				</div>
				{/if}

				{#if password2.enabled}
				<div class="field user-form-field user-login-form-password2">
					<label class="label" for="user-login-form-password2">{password2.label}</label>
					<div class="control has-icons-left has-icons-right">
						<input id="user-login-form-password2" class="input {password2Classes}" type="password" name="password2" invalid="{validationErrors.password2}" required={password2.required} placeholder="{password2.placeholder}" bind:value={password2.value} on:change={onChange} on:input={onInput}
						  autocomplete="password2" aria-controls="input-field-helper-password2" aria-describedby="input-field-helper-password2" />
						<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
						{#if password2.validated === true }
						<span class="icon is-small is-right">
							{#if password2.valid}
							<i class="fas fa-check"></i>
							{:else}
							<i class="fas fa-exclamation-triangle"></i>
							{/if}
						</span>
						{/if}
					</div>
					<p class="help {password2Classes}" id="input-field-helper-password2">
						{#if !(password2.validated && password2.valid) }
						{password2Helper}
						{:else}&nbsp;{/if}
					</p>
				</div>
				{/if}
				{#if errorMessage!=false }
				<div class="user-form-error notification is-danger">{errorMessage}</div>
				{/if}
				<div class="buttons-row">
					{#if cancel.enabled}
					<button class="button is-outlined user-register-form-cancel" on:click={rejectRegister}>{cancel.caption}</button>
					{/if}
					{#if submit.enabled}
					<button on:click={tryModeAction} disabled={formInvalid} class="button is-primary is-hovered user-register-form-submit pull-right">{submit.caption}</button>
					{/if}
				</div>
			</div>
			{/if}
		</div>
		{/if}
	</div>
</div>


<style>
	.help{
		min-height: 1em;
	}

	.block-container {
		position: relative;
		padding: 2em;
	}
	.user-login-form,
	.user-login-form-paper-head {
		display: block;
		width: 100%;
	}

	.centered {
		text-align: center;
		display: block;
		margin: auto auto;
		position: relative;
		width: 80%;
		height: auto;
	}

	.buttons-row-2 {
		margin-top: 1em;
	}

	.user-form-field {
		margin-bottom: 0.5em;
	}
</style>
