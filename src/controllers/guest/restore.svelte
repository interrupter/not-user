<script>
	import UserCommon from '../common/user.js';
	import LockBlockComponent from './lock.block.svelte';

	import {createEventDispatcher} from 'svelte';
	let dispatch = createEventDispatcher();

	const CLASS_ERR = UserCommon.CLASS_ERR;
	const CLASS_OK = UserCommon.CLASS_OK;


	let overlay;
	let stage = 'filling';
	let errorMessage = false;
	let formErrors = false;
	let success = false;

	export let mode = 'restore';
	export let loading = false;
	export let user = {};
	export let formValid = false;
	export let validation = true;
	export const  MODES = ['restore'];
	export const  MODES_FIELDS = {
		'restore': ['email'],
	};

	export const SUCCESS_TEXT = {
		'restore': 'Для завершения восстановления следуйте высланным вам инструкциям.'
	};

	let validationErrors = {
		email: false
	};


	export let title = 'Вход';
	export let description = '';
	export let closeOnClick = true;
	export let closeButton = false;

	export let redirectSuccess = false;
	export let redirectFailure = false;

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
			client:{
				tel: tel.enabled?tel.value:'',
				name: name.enabled?name.value:'',
				email: email.enabled?email.value:'',
				password: password.enabled?password.value:'',
				password2: password2.enabled?password2.value:'',
			},
			order
		};
	}

	export let resolveLogin = (data) => {
			overlay.$destroy();
			dispatch('resolve', data);
		};

	export let rejectLogin = () => {
			overlay.$destroy();
			dispatch('reject', {});
		};

	function onSuccess(res){
		stage = 'success';
		setTimeout(()=>{
			if(redirectSuccess){
				document.location.href = redirectSuccess;
			}else{
				resolveOrder(res);
			}
		}, resultShowtime);
	}

	function onValidationErrors(res){
		stage = 'failure';
		errorMessage = res.message;
		validationErrors = res.errors;
		setTimeout(()=>{
			stage = 'filling';
		}, resultShowtime);
	}

	function onException(e){
		stage = 'failure';
		errorMessage = e.message;
		setTimeout(()=>{
			if(redirectFailure){
				document.location.href = redirectSuccess;
			}else{
				rejectOrder(e);
			}
		}, resultShowtime);
	}

	$: emailHelper = validationErrors.username?validationErrors.email.join(', '):email.placeholder;

</script>

<style>

</style>
