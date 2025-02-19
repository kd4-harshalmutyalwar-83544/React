import React from "react";	
import ReactDOM from "react-dom/client";
   


    const Title = () => (
         <a href= "/">
         <img
         className="logo"
         alt = "logo"
         src = "https://lh3.googleusercontent.com/7kfhqCOmv17p7RDVZulmcFmKYiCmF8gYAEGRDOt3mfK8rwH1skFf8n_m3bGmLbnvWAiWVsIFE8Pk2i2ui_dvnpTZI9QSm4ylXQGRVPAjbQ=w1200-rw"
         />
         </a>
    );

    const Header =  () => {
       return (
        <div className = "header">
            <Title/>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        );
    };


    const restaurantList = [{
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-qzol9i3_jBlvmuTrYK0LhMMqe08oFPLmg&s",
        cusines:["Burger", "American"],
        rating: "4.2"
    },
    {
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-qzol9i3_jBlvmuTrYK0LhMMqe08oFPLmg&s",
        cusines:["Burger", "American"],
        rating: "4.2"
    },

    {
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-qzol9i3_jBlvmuTrYK0LhMMqe08oFPLmg&s",
        cusines:["Burger", "American"],
        rating: "4.2"
    },

    {
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-qzol9i3_jBlvmuTrYK0LhMMqe08oFPLmg&s",
        cusines:["Burger", "American"],
        rating: "4.2"
    },

    {
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-qzol9i3_jBlvmuTrYK0LhMMqe08oFPLmg&s",
        cusines:["Burger", "American"],
        rating: "4.2"
    },


    {
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-qzol9i3_jBlvmuTrYK0LhMMqe08oFPLmg&s",
        cusines:["Burger", "American"],
        rating: "4.2"
    }
];

    const RestrauntCard = () =>
    {
        return (
        <div className="card">
            <img src = {burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
        );
    }

    const Body = () =>
    {
        return(
            <div className="restaurant-list">
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
            </div>
        );
    };


    const Footer = () =>
    {
        return(
            <h4>Footer</h4>
        );
    }

    const AppLayout = () => {
        return (
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>

        )
    }



    const root = ReactDOM.createRoot(document.getElementById("root")); 

    root.render(<AppLayout/>);
