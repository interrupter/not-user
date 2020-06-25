<script>
	import 'bulma-switch';
	import {onMount} from 'svelte';


	import UITag from './ui.tag.svelte';
	import UserCommon from './user.js';
	const CLASS_ERR = UserCommon.CLASS_ERR;
	const CLASS_OK = UserCommon.CLASS_OK;

	let overlay;
	let stage = 'filling';
	let errorMessage = false;
	let formErrors = false;
	let success = false;

	let validationErrors = {
		username:      	false,
		email:         	false,
		tel:           	false,
		password:      	false,
		password2:     	false,
    active:        	false,
		country:       	false,
		role: 					false
	};

	export let validation = true;
	export const  MODES = ['create', 'update'];

	export const  MODES_FIELDS = {
		'create': ['username', 'email', 'tel', 'password', 'password2', 'active', 'country', 'role'],
		'update': ['active', 'country', 'role'],
	};

	export const SUCCESS_TEXT = {
		'create': 'Учетная запись создана',
		'update': 'Учетная запись обновлёна'
	};

	import {createEventDispatcher} from 'svelte';
	let dispatch = createEventDispatcher();

	export let mode = 'create';
	export let loading = false;
	export let formValid = false;

	export let title = {
		__enabled: true,
		create: 'Добавление учетной записи',
		update: 'Редактирование учетной записи',
	};

	export let description = {
		__enabled: true,
		create:  'Заполните пожалуйств форму',
		update:  'Заполните пожалуйств форму',
	};

	export let resultShowtime = 5000;

	export let username = UserCommon.fieldInit('username', {enabled: true});
	export let password = UserCommon.fieldInit('password', {enabled: true});
	export let password2 = UserCommon.fieldInit('password2', {enabled: true});
	export let tel = UserCommon.fieldInit('tel', {enabled: true});
	export let email = UserCommon.fieldInit('email', {enabled: true});
	export let role = UserCommon.fieldInit('role', {enabled: true});
	export let active = UserCommon.fieldInit('active', {enabled: true});
	export let country = UserCommon.fieldInit('country', {enabled: true});

	let fields = {username, password, tel, password2, email, active, role, country};

	export let submit = {
		caption: 'Отправить',
		enabled: true
	};

	export let cancel = {
		caption: 'Назад',
		enabled: true
	};

	export let user = {};
	export let userRoles = [];

	function initUserRoles(userRoleSet){
		userRoleSet.forEach((userRole)=>{
			userRoles.push(UserCommon.ROLES.find(el => el.title === userRole ));
		});
	}

	function onRoleChange(ev){
		let data = {
			field: 'role',
			value: ev.detail.map(t => t.title)
		};
		if(validation){
			let res = UserCommon.validateField(data.field, data.value, fields);
			if(res === true){
				setFieldValid(data.field);
				role.value = data.value;
			}else{
				setFieldInvalid(data.field, res);
			}
			validateForm(data);
		}else{
			dispatch('input', data);
		}
	}

	onMount(() => {
		for(let t in user){
			if(t === 'role'){
				initUserRoles(user.role);
			}else if(Object.prototype.hasOwnProperty.call(fields, t)){
				fields[t].value = user[t];
			}
		}
		for(let t in fields){
			if (MODES_FIELDS[mode].indexOf(t) === -1){
				fields[t].enabled = false;
			}
		}
		fields = fields;
	});

	function collectData(){
		let result = {};
		MODES_FIELDS[mode].forEach((fieldname)=>{
			if(Object.prototype.hasOwnProperty.call(fields, fieldname) && fields[fieldname].enabled){
				result[fieldname]	 = fields[fieldname].value;
			}
		});
		if (mode==='update'){
			result._id = user._id;
		}
		return result;
	}

	function onChange(ev){
		let data = {
			field: ev.target.name,
			value: ev.target.type==='checkbox'?ev.target.checked:ev.target.value
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
		let data = {
			field: ev.target.name,
			input: ev.data,
			value: ev.target.type==='checkbox'?ev.target.checked:ev.target.value
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

	export let rejectForm = ()=>{
		loading = true;
		dispatch('rejectForm');
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

	$: activeHelper = validationErrors.active?validationErrors.active.join(', '):active.placeholder;
	$: activeClasses = validationErrors.active?CLASS_ERR:CLASS_OK;

	$: countryHelper = validationErrors.country?validationErrors.country.join(', '):country.placeholder;
	$: countryClasses = validationErrors.country?CLASS_ERR:CLASS_OK;

	$: roleHelper 	= 	validationErrors.role?	validationErrors.role.join(', ')	:role.placeholder;
	$: roleClasses 	= 	validationErrors.role?	CLASS_ERR:CLASS_OK;
	$: roleInvalid 	= 	role.validated && !role.valid;

	$: formInvalid = (formValid === false);

</script>

{#if success}
<div class="notification is-success">
	<h3 class="user-form-success-message">{SUCCESS_TEXT[mode]}</h3>
</div>
{:else}
{#if title.__enabled}
<h5 class="title">{title[mode]} {#if mode==='update'}{user.userID}#{user.username}{/if}</h5>
{/if}
{#if description.__enabled}
<h6 class="subtitle is-6">{description[mode]}</h6>
{/if}
<div class="container">
	{#if fields.username.enabled}
	<div class="field user-form-field user-login-form-username">
		<label class="label">{fields.username.label}</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input {usernameClasses}" type="text" name="username" invalid="{validationErrors.username}" required={fields.username.required} placeholder="{fields.username.placeholder}" bind:value={fields.username.value} on:change={onChange} on:input={onInput} autocomplete="username"
				aria-controls="input-field-helper-username" aria-describedby="input-field-helper-username" />
			<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
			{#if fields.username.validated === true }
			<span class="icon is-small is-right">
				{#if fields.username.valid}
				<i class="fas fa-check"></i>
				{:else}
				<i class="fas fa-exclamation-triangle"></i>
				{/if}
			</span>
			{/if}
		</div>
		<p class="help {usernameClasses}" id="input-field-helper-username">
			{#if !(fields.username.validated && fields.username.valid) }{usernameHelper}{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	{#if fields.email.enabled}
	<div class="user-form-field user-login-form-email field">
		<label class="label">{fields.email.label}</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input {emailClasses}" bind:value={fields.email.value} required={fields.email.required} placeholder="{fields.email.placeholder}" invalid="{validationErrors.email}" on:change={onChange} on:input={onInput} name="email" type="email" autocomplete="email"
				aria-controls="input-field-helper-email" aria-describedby="input-field-helper-email" />
			<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
			{#if fields.email.validated === true }
			<span class="icon is-small is-right">
					{#if fields.email.valid}
					<i class="fas fa-check"></i>
					{:else}
					<i class="fas fa-exclamation-triangle"></i>
					{/if}
			</span>
			{/if}
		</div>

		<p class="help {emailClasses}" id="input-field-helper-email">
			{#if !(fields.email.validated && fields.email.valid) }
			{emailHelper}
			{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	{#if fields.password.enabled}
	<div class="field user-form-field user-login-form-password">
		<label class="label">{fields.password.label}</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input {passwordClasses}" type="password" name="password"
				invalid="{validationErrors.password}"
				required={fields.password.required}
				placeholder="{fields.password.placeholder}"
				bind:value={fields.password.value}
				on:change={onChange} on:input={onInput}
				autocomplete="password" aria-controls="input-field-helper-password" aria-describedby="input-field-helper-password"
				/>
			<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
			{#if fields.password.validated === true }
			<span class="icon is-small is-right">
				{#if fields.password.valid}
				<i class="fas fa-check"></i>
				{:else}
				<i class="fas fa-exclamation-triangle"></i>
				{/if}
			</span>
			{/if}
		</div>
		<p class="help {passwordClasses}" id="input-field-helper-password">
			{#if !(fields.password.validated && fields.password.valid) }{passwordHelper}{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	{#if fields.password2.enabled}
	<div class="field user-form-field user-login-form-password2">
		<label class="label">{fields.password2.label}</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input {password2Classes}" type="password" name="password2" invalid="{validationErrors.password2}"
			required={fields.password2.required} placeholder="{fields.password2.placeholder}"
			bind:value={fields.password2.value} on:change={onChange} on:input={onInput}
				autocomplete="password2" aria-controls="input-field-helper-password2" aria-describedby="input-field-helper-password2"
				/>
			<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
			{#if fields.password2.validated === true }
			<span class="icon is-small is-right">
				{#if fields.password2.valid}
				<i class="fas fa-check"></i>
				{:else}
				<i class="fas fa-exclamation-triangle"></i>
				{/if}
			</span>
			{/if}
		</div>
		<p class="help {password2Classes}" id="input-field-helper-password2">
			{#if !(fields.password2.validated && fields.password2.valid) }
			{password2Helper}
			{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	{#if fields.tel.enabled}
	<div class="field user-form-field user-login-form-tel">
		<label class="label">{fields.tel.label}</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input {telClasses}"
				type="tel" name="tel" invalid="{validationErrors.tel}"
				required={fields.tel.required} placeholder="{fields.tel.placeholder}"
				bind:value={fields.tel.value} on:change={onChange} on:input={onInput}
				autocomplete="tel" aria-controls="input-field-helper-tel"
				aria-describedby="input-field-helper-tel" />
			<span class="icon is-small is-left"><i class="fas fa-phone"></i></span>
			{#if fields.tel.validated === true }
			<span class="icon is-small is-right">
				{#if fields.tel.valid}
				<i class="fas fa-check"></i>
				{:else}
				<i class="fas fa-exclamation-triangle"></i>
				{/if}
			</span>
			{/if}
		</div>
		<p class="help {telClasses}" id="input-field-helper-tel">
			{#if (!fields.tel.validated || !fields.tel.valid) }
				{telHelper}
			{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}
	{#if errorMessage!=false }
	<div class="user-form-error notification is-danger">{errorMessage}</div>
	{/if}

	{#if fields.active.enabled}
	<div class="user-form-field user-login-form-active field">
			<input
				id="user-login-form-active-field"
				class="switch is-rounded is-success "
				bind:checked={fields.active.value}
				required={fields.active.required}
				placeholder="{fields.active.placeholder}"
				invalid="{validationErrors.active}" on:change={onChange} on:input={onInput}
				name="active" type="checkbox"
				aria-controls="input-field-helper-active" aria-describedby="input-field-helper-active"
				/>
		<label class="label" for="user-login-form-active-field">{fields.active.label}</label>
		<p class="help {activeClasses}" id="input-field-helper-active">
			{#if !(fields.active.validated && fields.active.valid) }
			{activeHelper}
			{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	{#if fields.role.enabled}
	<div class="user-form-field user-login-form-role field">
		<label class="label">{fields.role.label}</label>
		<div class="control {roleClasses}">
			<UITag variants={UserCommon.ROLES} bind:error={roleInvalid} on:change={onRoleChange} bind:items={userRoles} />
		</div>

		<p class="help {roleClasses}" id="input-field-helper-role">
			{#if !(fields.role.validated && fields.role.valid) }
			{roleHelper}
			{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	{#if fields.country.enabled}
	<div class="user-form-field user-login-form-country field">
		<label class="label">{fields.country.label}</label>
		<div class="control">
			<div class="select  {countryClasses}">
				<select bind:value={fields.country.value} on:change={onChange} on:input={onInput}>
					{#each UserCommon.COUNTRIES as vairiant}
					<option value="{variant.id}">{variant.title}</option>
					{/each}
				</select>
			</div>
		</div>
		<p class="help {countryClasses}" id="input-field-helper-country">
			{#if !(fields.country.validated && fields.country.valid) }
			{countryHelper}
			{:else}&nbsp;{/if}
		</p>
	</div>
	{/if}

	<div class="buttons-row">
		{#if cancel.enabled}
		<button class="button is-outlined user-register-form-cancel" on:click={rejectForm}>{cancel.caption}</button>
		{/if}
		{#if submit.enabled}
		<button on:click={tryModeAction} disabled={formInvalid} class="button is-primary is-hovered user-register-form-submit pull-right">{submit.caption}</button>
		{/if}
	</div>

</div>
{/if}
