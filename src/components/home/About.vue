<template>
    <div>
        <v-sheet
            color="#1aa6b7"
            elevation="1"
            height="530"
            outlined
            rounded
            shaped
            width="800"
        >
            <div class="intro">
                <p>Developed By SE-13</p>
            </div>
            <v-divider></v-divider>

            <div class="features">
                <h4>Key Features</h4>
                
            </div>
            <div class="features-list">
                 <ul>    
                    <li>Product Management</li>
                    <li>Customer Management</li>
                    <li>Inventory Management</li>
                    <li>Order Management</li>
                    <li>Payment Management</li>
                </ul>   
            </div>
            <v-divider></v-divider>

            <div class="contact">
                <h4>Contact Us For Help</h4>
                
            </div>
            <div class="email">
                <p>example@gmail.com</p>
                
            </div>


      
        
        </v-sheet>


    </div>


</template>

<script>
export default {
    name: "AboutSheet"
}


</script>

<style>

.intro{
    padding-left: 30%;
    margin-top: 40px;
    font-size: 35px;
    font-weight: 1000;
}

.features{
    padding-left: 10%;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 900;

}

.features-list{
    padding-left: 15%;
    font-size: 30px;
    font-weight: 500;
}

.email{
    padding-left: 15%;
    font-size: 25px;
    font-weight: 400;
}

.contact{
    padding-left: 10%;
    margin-top: 10px;
    font-size:30px;
    font-weight: 900;
}

</style>