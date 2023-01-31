import React from "react";
import { AppFooter } from "./css/footer_styled";

function Footer(iconColor) {
    console.log();
    return (
        <AppFooter>
            <div>
                <i class="fa-solid fa-house-chimney"></i>
            </div>
            <div>
                <i class="fa-solid fa-heart"></i>
            </div>
            <div>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div>
                <i class="fa-solid fa-magnifying-glass "></i>
            </div>
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
        </AppFooter>
    );
}

export default Footer;
