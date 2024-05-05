import Image from 'next/image';
import Woman from '@/public/assets/woman.webp';

export default function Testimonial() {
	return (
		<section
			className='flex items-center justify-center md:h-screen'
			id='testimonial'
		>
			<div className='absolute -z-50 hidden h-[40rem] w-[40rem] rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 md:block'></div>
			<div className='grid grid-cols-1 items-center justify-center gap-x-4 gap-y-4 px-2 sm:gap-x-8 sm:px-4 md:h-screen md:grid-cols-2 md:gap-x-24 md:gap-y-0 md:px-8 lg:gap-x-48 lg:px-24'>
				<div className='flex items-center justify-center md:justify-end'>
					<Image
						src={Woman}
						alt=''
						className='rounded-md md:rounded-full'
						height={350}
						width={350}
					/>
				</div>
				<div className='flex flex-col gap-y-8 px-4 text-left sm:px-16 md:px-0'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
						omnis dolor excepturi consequatur, quod quia totam dignissimos,
						consectetur enim ipsa illo quaerat nostrum necessitatibus! Earum
						nemo sapiente suscipit nesciunt atque, vitae, asperiores illum porro
						totam incidunt voluptas quos quod, reiciendis harum ad voluptatibus
						vel maiores dolor ipsam ea possimus et ratione id. Laboriosam
						aspernatur itaque obcaecati odio neque odit asperiores minima atque
						sint eius adipisci ratione, delectus exercitationem deleniti debitis
						doloremque accusantium temporibus sed sapiente! Laboriosam
						voluptates quas exercitationem voluptatem maiores! Repellat itaque
						aspernatur sequi quae facilis repudiandae esse exercitationem!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
						rerum ullam aut labore officia reprehenderit voluptatibus quia error
						sed! Tenetur neque molestias optio ipsa pariatur!
					</p>
				</div>
			</div>
		</section>
	);
}
