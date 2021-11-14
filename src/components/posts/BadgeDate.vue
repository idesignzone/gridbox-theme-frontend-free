<template>
    <div>
      <h2 class="uk-margin-remove-bottom">{{formatedDay}}</h2>
      <p>{{formatedMonth}}</p>
    </div>
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
          formatedMonth() {
            return moment(this.date).locale('en_gb').format('MMM')
          },
          formatedDay() {
            return moment(this.date).locale('en_gb').format('D')
          }
        }
    }
</script>