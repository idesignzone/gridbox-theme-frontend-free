<template>
    <div>{{formatedDate}}</div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "FormatedDate",
        props: {
          date: {
            type: String,
            required: true
          }
        },
        computed: {
          formatedDate() {
            return moment(this.date).locale('en_gb').format('ll')
          }
        }
    }
</script>