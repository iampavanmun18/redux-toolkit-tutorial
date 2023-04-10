import React from "react";
import "../spinner.css";

export default function LoadingSpinner() {
    return (
        <>
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "-5%" }}>Loading.....</div></>


    );
}
