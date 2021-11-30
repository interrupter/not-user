<script>
	import { fly } from 'svelte/transition';
	import UserCommon from '../common/user.js';
	import {UICommon, UIError, UISuccess} from 'not-bulma';
	const CLASS_ERR = UICommon.CLASS_ERR;
	const CLASS_OK = UICommon.CLASS_OK;

	import LockBlockComponent from './lock.block.svelte';
	import LoginModeLogin from './login/login.svelte';
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

	export const AVAILABLE_MODES = [
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

	export let MODES = [
		'login',
		'requestLoginCodeOnEmail',
		'requestLoginCodeOnTelephone',
		'loginByCode'
	];

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
	export let resultShowtime = UICommon.DEFAULT_REDIRECT_TIMEOUT;

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

	function onInput(ev){
		let res = true;
		let val = ev.target.value;
		if(ev.target.name === 'tel'){
			ev.preventDefault();
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
			<UISuccess title="" message={SUCCESS_TEXT[mode]}></UISuccess>
			{:else}
			<div class="user-login-form">
				{#if title.__enabled}
				<h5 class="title">{title[mode]}</h5>
				{/if}
				{#if description.__enabled}
				<h6 class="subtitle is-6">{description[mode]}</h6>
				{/if}

				{#if mode=='login'}
				<LoginModeLogin
					{email}
					{emailHelper}
					{emailClasses}
					{username}
					{usernameHelper}
					{usernameClasses}
					{password}
					{passwordHelper}
					{passwordClasses}
					{validationErrors}
					{onChange}
					{onInput}
				></LoginModeLogin>
				{/if}
				{#if mode=='requestLoginCodeOnEmail'}{/if}
				{#if mode=='requestLoginCodeOnTelephone'}{/if}
				{#if mode=='loginByCode'}{/if}

				{#if errorMessage!=false }
				<UIError title="" message={errorMessage}></UIError>
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
