import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

    const posts =[
        {
            id:1,
            title:'wedding',
            desc:"Immerse yourself in elegance and romance by choosing our wedding event at Morocco. Located in the picturesque setting of all cities, our venue offers everything you need to turn your dream wedding into reality.",
            img:"https://cdn.christmaslightsetc.com/images/CategoryDetail/151261/icicle-wedding-lights.jpg",
        },
        {
            id:1,
            title:'Festival',
            desc:"Dive into the excitement and vibrancy  , an event that promises an unforgettable experience in the heart of all cities. Our festival offers a perfect blend of music, art, culture, and entertainment, creating memories that will last a lifetime.",
            img:"https://wallpaperaccess.com/full/9182173.jpg",
        },
        {
            id:1,
            title:'Birthday',
            desc:"Make your birthday unforgettable with a celebration . Whether you're turning sweet 16, celebrating a milestone 50th, or anything in between, our venue offers the perfect setting for an extraordinary birthday bash.",
            img:"https://th.bing.com/th/id/R.fc1cb2e61f3637950b6de76a5ae10024?rik=n8mJX2P%2f%2frqocw&riu=http%3a%2f%2fmybbshowershop.com%2fimg%2fcms%2f01+anniversaire+lily+10+ans+vert+mint+et+rose+gold+decoration+ballons+organiques.jpg&ehk=9R6Pcn7F1jaUR%2bCnBuNup4Q2gXwn5EIopW7HSUV%2bkXY%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id:1,
            title:'Cotporate Event',
            desc:"Host your next corporate event , where sophistication meets functionality. Whether you're planning a conference, seminar, team-building retreat, or gala dinner, our venue provides the ideal setting to make your event a resounding success.",
            img:"https://www.conseils-pme.info/wp-content/uploads/2021/08/datas-202.jpeg",
        },
    ]
  return (
    <div className='home'>
        <div className="posts">
            {posts.map((post)=>(
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to="/event">
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                            </Link>
                            </div>
                    </div>


            ))}

        </div>

    </div>
  )
}

export default Home