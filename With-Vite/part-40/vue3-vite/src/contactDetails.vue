<template>
    <div class="contact-details">
        <h1 class="contact-heading">Contact Details</h1>
        <p><strong>Name: </strong>{{ name }}</p>
        <p><strong>Website: </strong><a :href="websiteAddress">Portfolio</a></p>
        <p><strong>Address: </strong>{{ address }}</p>
    </div>
</template>

<script>
export default{
    // props: ['name', 'websiteAddress', 'address'],
    // props: ['name' : String, 'websiteAddress' : String, 'address' : String],
    props: {
        'name' : {
            type: String
        }, 
        'websiteAddress' : {
            type: String,
            required: true,
        }, 
        'address' : {
            type: String,
            required: false,
            default: "Rangpur, Bangladesh -Default"
        },
    },

    data() {
        return {
            // name: "Md. Shad Chowdhury",
            // website: "http://blogworld-bd.great-site.net",
            // address: "Dhaka, Bangladesh"
        }
    }
}
</script>

<style scoped>
.contact-details {
    border: 1px solid gray;
    margin: 11px 22px;
    padding: 22px;
}

.contact-heading {
    color: rgb(0, 73, 107);
}
</style>