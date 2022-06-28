<script>
    import { UIBox } from "not-bulma/src/elements/block";
    import { UITitle } from "not-bulma/src/elements/various";
    
    export let _id = '';
    export let id = -1;
    export let username = 'no_name';

</script>

<UIBox classes="inline px-2">
    <UITitle title={username} size={6} align='center' />
</UIBox>


<style>
    .box.inline{
        display: inline-block;
    }
</style>