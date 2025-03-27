import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    public dataJson: any[] = [
        {
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 2,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 3,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 4,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            "id": 5,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/kirr24w0-0/mouse/e/n/y/usb-optical-mouse-logitech-original-imafy2hbps2uypyt.jpeg?q=70",
            "name": "Logitech Optical Mouse",
            "description": "Ergonomic design with precision tracking for seamless navigation.",
            "rating": 4
        },
        {
            "id": 6,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/jxjahe80/keyboard/f/j/z/lenovo-keyboard-0b47190-original-imafhyhyheahhzgn.jpeg?q=70",
            "name": "Lenovo Wired Keyboard",
            "description": "Full-sized keyboard with quiet keys for comfortable typing.",
            "rating": 4
        },
        {
            "id": 7,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/kr83ukw0/monitor/f/o/n/27gn950-b-27gn950-b-lg-original-imag52fejhxnyz9a.jpeg?q=70",
            "name": "LG UltraGear Monitor",
            "description": "4K UHD gaming monitor with fast refresh rates for immersive gameplay.",
            "rating": 5
        },
        {
            "id": 8,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/kn6cxow0/headphone/n/5/t/hp-ht03-original-imagfyhbz2hzvcaa.jpeg?q=70",
            "name": "HP Wireless Headphones",
            "description": "Noise-cancelling headphones with crystal-clear sound quality.",
            "rating": 4
        },
        {
            "id": 9,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/ko0d6kw0/speaker/mobile-tablet-speaker/h/t/m/jbl-go-3-original-imag2fqhxhahvqpg.jpeg?q=70",
            "name": "JBL Go 3 Speaker",
            "description": "Portable Bluetooth speaker with powerful bass and vibrant sound.",
            "rating": 5
        },
        {
            "id": 10,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/krntoy80/smartwatch/x/o/e/ios-mkqk3hn-a-apple-original-imag5e5fyhhxwhax.jpeg?q=70",
            "name": "Apple Watch Series 7",
            "description": "Advanced health tracking features with sleek design.",
            "rating": 5
        },
        {
            "id": 11,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/k0plpjk0/smartwatch-refurbished/d/j/z/a-42-bip-s-42-mi-original-imafh2ycb5jsn8hr.jpeg?q=70",
            "name": "Amazfit Bip S",
            "description": "Lightweight smartwatch with excellent battery life and fitness tracking.",
            "rating": 4
        },
        {
            "id": 12,
            "imgUrl": "https://rukminim2.flixcart.com/image/416/416/jzxvbi80/processor/q/e/q/intel-bx80684i38100-original-imafjb5wgqztcb8j.jpeg?q=70",
            "name": "Intel Core i3 Processor",
            "description": "Efficient performance for everyday computing tasks.",
            "rating": 3
        }
    ]
}
