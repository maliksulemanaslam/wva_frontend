import { render } from "@testing-library/react";

export default function Wallet(){
    return (
        <main>
            <div>
                <ul>
                    <li>address: 0x Your address here </li>
                    <li>balance: 99999 eth</li>
                    <li>network: your conected network here </li>
                </ul>
            </div>
        </main>
    );

}