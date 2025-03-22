import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule
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
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        },
        {
            id: 1,
            imgUrl: 'https://rukminim2.flixcart.com/image/416/416/k58hwnk0/mouse/2/r/2/hp-dual-mode-6cr71aa-original-imafnyyawafsrspx.jpeg?q=70&crop=false',
            name: 'HP Mouse',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis ipsum, aperiam.",
            rating: 3
        }
    ]
}
