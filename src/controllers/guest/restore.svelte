<script>
	let stage = 'filling';
	let errorMessage = '';

	import {createEventDispatcher} from 'svelte';
	let dispatch = createEventDispatcher();

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

	$: usernameHelper = validationErrors.username?validationErrors.username.join(', '):username.placeholder;
</script>

<style>

</style>
