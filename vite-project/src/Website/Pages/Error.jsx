import React from 'react'

const Error = () => {
	return (

		<section className='container-lg flex items-center justify-center mt-11'>

			<div className=" h-[510px]  bg-pink-100  ">
				<div className="container  flex flex-col  md:flex-row items-center  justify-between px-5 text-gray-700 ">
					<div className="">
						<div className=" pr-20   w-9/12">
							<div className="text-5xl  font-bold -mb-2.5  text-nowrap ">Page not available</div>
							<div className="text-md   font-bold -mb-4 mt-4 leading-7 ">
								Sorry, but the page you were looking for could not be found.
							</div>
							<div className="text-sm -mb-8 mt-8">
								You can return to our <a href="http://fy.local/"><u>home page</u></a>, or drop us a line  if you can't find what you're looking for.						</div>
						</div>
					</div>
					<div className="w-full  ml-24 mt-10 items-end basis-auto hover:-translate-x-6 hover:scale-100">
						<img src="./src/assets/Error.jpg" className="h-[430px]" alt="Page not found" />
					</div>
				</div>
				<div class="row flex justify-evenly my-14 pt-3">
					<div class="col-lg-3 col-md-6 mb-15">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-2 text-lg font-bold">Chat to sales</strong>
								<p class="text-sm">
									Speak to our teamcom<br />
									<a href="mailto:sales@kidify.com">sales@kidify.com</a>										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 ">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-2 text-lg font-bold">Call us</strong>
								<p class="text-sm ">
									<a href="tel:+01 568 253">+01 568 253</a><br />
									<a href="tel:+01 568 253">+01 568 253</a>										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 ">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-2 text-lg font-bold">Postal mail</strong>
								<p class="text-sm">
									456 Park Avenue South, Apt 7B<br />
									New York, NY 10016										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 ">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="block mb-2 text-lg font-bold">Social Network</strong>
								<p class="text-sm">
									456 Park Avenue South, Apt 7B<br />
									New York, NY 10016										</p>
							</div>
						</div>
					</div>
					<div className='pb-10 border-b-2  border-b-zinc-200'>
					</div>
					<div className='flex pt-10'>
						<div className='mb-16 '>
							<div className='m-0 p-0'>
								<section>
									<div className=''>
										<div className='bg-cover border-2 border-red-600 border-dashed bg-[]'>
											<img src="./src/assets/bg-subscriber.png" alt="" />
											<div className='flex flex-wrap  '>
												<div className=' w-1/12'></div>
												<div class="col-lg-5 w-5/12 -mt-44 ">
													<h4 class="heading-4 brand-2 mb-4 text-3xl font-bold newsletter-title text-yellow-600 font-['Lobster Two']">
														Sing up and get up to <span class="brand-3 text-red-600">25% </span>off your first purchase</h4>
													<p class="  mb-4 text-base newsletter-subtitle text-neutral-500">Receive offter, product alerts, styling inspiration and more. By signing up, you agree to our Privace Policy</p>
												</div>
												<div className=' w-5/12'>
													<div className='flex justify-end mb-4'></div>
												</div>
											</div>
										</div>
									</div>
								</section>

							</div>
						</div>
					</div>
				</div>
			</div>








		</section>

	)
}

export default Error









// import React from 'react'




// const Error = () => {
// 	return (
// 		<sectoin className="  lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center2 justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">


// 			<div className='container-lg xl:pt-24 w-full xl:w-11/12 relative pb-12 lg:pb-0'>
// 				<div className='h-[700px] w-full bg-pink-100 relative m-auto'>
// 					<h1 className='text-4xl mt-72 absolute font-serif ml-16'>Page not available</h1>
// 					<p className='absolute mt-96 ml-16 text-xl font-medium w-96 traking-wide'>Sorry, but the page you were looking
// 						for could not be found.</p>
// 					<div class="text-md mb-30 w-96 mt-[460px] absolute ml-16">
// 						You can return to our <a href="http://fy.local/"><u className='text:underline'>home page</u></a>, or drop us a line
// 						if you can't find what you're looking for.</div>
// 					<div className='ml-[45%] mt-14 hover:scale-y-95'>
// 						<img src='./src/assets/Error.jpg'></img>
// 					</div>
// 				</div>
// 			</div>

// 			<div class="row flex justify-around  mt-20   order-4 md:flex-wrap">
// 				<div class="col-lg-3 col-md-6 mb-15">
// 					<div class="cardContact cardChat">
// 						<div class="cardInfo">
// 							<strong class="d-block mb-5 font-xl-bold">Chat to sales</strong>
// 							<p class="font-md w-[285px]">
// 								Speak to our teamcom </p>
// 							<a href="mailto:sales@kidify.com">sales@kidify.com</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="col-lg-3 col-md-6 mb-15">
// 					<div class="cardContact cardChat">
// 						<div class="cardInfo">
// 							<strong class="d-block mb-5 font-xl-bold">Call us</strong>
// 							<p class="font-md  ">
// 								<a href="tel:+01 568 253">+01 568 253</a>
// 								<a href="tel:+01 568 253">+01 568 253</a>
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="col-lg-3 col-md-6 mb-15">

// 					<strong class="d-block mb-5 font-xl-bold ">Postal mail</strong>
// 					<p class="font-md w-60">
// 						456 Park Avenue South, Apt 7B
// 						New York, NY 10016
// 					</p>

// 				</div>
// 				<div class="col-lg-3 col-md-6 mb-15">

// 					<strong class="d-block mb-5 font-xl-bold">Social Network</strong>
// 					<p class="font-md w-60">
// 						456 Park Avenue South, Apt 7B
// 						New York, NY 10016
// 					</p>

// 				</div>
// 			</div>

// 			<div class=" py-10 w-11/12 border-b border-gray-400 m-auto"></div>
// 			<div className=''>
// 				<h1 className='absolute ml-96 font-[Lobster+Two]	 '>Sing up and get up to 25% off
// 					your first purchase</h1>
// 				<img src='./src/assets/Error-bd.jpg ' className=' bg-cover mt-24 m-auto  border-2  border-dashed border-red-500 '></img>
// 			</div>



// 		</sectoin>

// 	)
// }

// export default Error
