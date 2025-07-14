import React from 'react'
import TitleButton from './TitleButton'


const techs = [
  { name: 'React', class: 'devicon-react-original colored' },
  { name: 'Next.js', class: 'devicon-nextjs-original' },
  { name: 'Tailwind CSS', class: 'devicon-tailwindcss-plain colored' },
  { name: 'CSS3', class: 'devicon-css3-plain colored' },
  { name: 'JavaScript', class: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', class: 'devicon-typescript-plain colored' },
  { name: 'Node.js', class: 'devicon-nodejs-plain colored' },
  { name: 'Express', class: 'devicon-express-original' },
  { name: 'MongoDB', class: 'devicon-mongodb-plain colored' },
  { name: 'Firebase', class: 'devicon-firebase-plain colored' },
  { name: 'Material UI', class: 'devicon-materialui-plain colored' },
  { name: 'HTML5', class: 'devicon-html5-plain colored' },
  { name: 'PHP', class: 'devicon-php-plain colored' },
  { name: 'MySQL', class: 'devicon-mysql-plain colored' },
  { name: 'Socket.io', class: 'devicon-socketio-original colored' },
  { name: 'GitHub', class: 'devicon-github-original' },
  { name: 'AWS', class: 'devicon-amazonwebservices-original colored' },

  // 🔹 Manually Added Logos
//   {
//     name: 'Cloudinary',
//     image:
//       'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1684175477/brand/Cloudinary_Logo_RGB_Black_Transparent_lz1qiv.png',
//   },
  {
    name: 'Netlify',
    image:
      'https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png',
  },
//   {
//     name: 'Vercel',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/a/a3/Vercel_logo_black.svg',
//   },
];


const Skill = () => {
  return (
    <div>
        <div className='flex w-full  flex-col items-center lg:my-24 lg:px-24 px-4 my-4 gap-10'>
            <div className='flex flex-col gap-2 items-center'>
                <TitleButton title='Skills' />
                <p className='body'>The skills, tools and technologies I am really good at:</p>

            </div>


        <div className="flex flex-wrap gap-6 lg:gap-15 items-center">
           {techs.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-sm">
                    {tech.class ? (
                        <i className={`${tech.class} text-6xl`} title={tech.name}></i>
                    ) : (
                        <img
                        src={tech.image}
                        alt={tech.name}
                        title={tech.name}
                        className="w-15 h-15 object-contain"
                        />
                    )}
                    <span className="mt-2 body text-center">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skill