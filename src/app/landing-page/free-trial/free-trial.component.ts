import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})
export class FreeTrialComponent implements OnInit{
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  
  ngOnInit(){
   this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#010B30"
        },
        "shape": {
          "type": "circle",
          "polygon": {
            "nb_sides": 7
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.2,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 30,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#5B566E",
          "opacity": 0.4,
          "width": 1.5
        },
        "move": {
          "enable": true,
          "speed": 10,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };

    AOS.init(
      {
      
      }
    )

  }
  
  
}
