import pic1 from './images/tour-1.jpeg'
import pic2 from './images/tour-2.jpeg'
import pic3 from './images/tour-3.jpeg'
import pic4 from './images/tour-4.jpeg'
export const pageLinks = [
    {id:1,
        href:'#home', text:'home',
          
    },
    {
        id:2,
        href:'#about',
        text:'about'
    },
    {
        id:3,
        href:'#services',
        text:'services'
    },
    {
        id:4,
        href:'#tours',
        text:'tours'
    }
];
export const services = [
    {
        id:1,
    icon:'fas fa-wallet fa-fw',
    title:'saving money',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id:2,
        icon:'fas fa-tree fa-fw',
        title:'endless hiking',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
        },
        {
            id:3,
            icon:'fas fa-socks fa-fw',
            title:'amazing comfort',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
            }


]
export const tours = [
    {
        id:1,
        pic:pic1,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        map:'china',
        day:'6 days',
        price:'from $2100'
    },
    {
        id:2,
        pic:pic2,
        date:'october 1th, 2020',
        title:'best of java',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        map:'indonesia',
        day:'11 days',
        price:'from $1400'
    },
    {
        id:3,
        pic:pic3,
        date:'september 15th, 2020',
        title:'explore hong kong',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        map:'hong kong',
        day:'8 days',
        price:'from $5000'
    },
    {
        id:3,
        pic:pic4,
        date:'december 5th, 2019',
        title:'kenya highlights',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        map:'kenya',
        day:'20 days',
        price:'from $3300'
    }
]