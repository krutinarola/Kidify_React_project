import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";


export const Shop = () => {
  return (
    <>

      <section className='bg-[url(./src/assets/bg-head.png)] bg-contain bg-no-repeat bg-right pt-20 pb-28 mt-3 bg-stone-200'>
        <div className='container-lg'>
          <h1 className='font-bold text-5xl font-serif'>Baby Clothing</h1>
          <div className=' p-3 space-x-2'>

            {/* <Link className='' to="/"> */}
            <span className='text-purple-400'>Home</span>
            {/* </Link> */}

            <MdOutlineKeyboardArrowRight className='inline' />
            <span>Shop</span>
          </div>

          <div className='mt-9 flex flex-wrap'>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Activity &amp; Gear</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Baby Care</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Baby Comfort</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Baby Shoes</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Boys' clothing</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white " href="https://kidify.themebeer.com/product-category/activity-gear/">Familyn Outfits</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Fashion Hub</a>
            <a className="text-sm font-normal pt-1 pr-4 pb-1 pl-4 mr-2.5 mb-2.5 border-zinc-200 border-2 rounded-3xl bg-white" href="https://kidify.themebeer.com/product-category/activity-gear/">Fashion Trends</a>
          </div>
        </div>
      </section>

      {/* next section */}
      <section className='pt-14 block'>
        <div className='container-lg'>
          <div className='flex flex-wrap'>
            <div className='w-3/4 basis-auto order-6'>
              <div className='flex items-center justify-between mb-5 border-b-2 border-b-zinc-200 pb-4'>
                <div class="number-product">
                  <p class="body-p2 neutral-medium-dark result-count" data-per_page="9" data-page="1" data-total="79">
                    Showing 1-9 of 79 results	</p>
                </div>
                <div className='flex items-center'>
                  <div className='mr-4 items-center flex'>
                    <label for="products-per-page">Sort by</label>
                    <select name="orderby" onchange="this.form.submit()" className='bg--transparent p-1 rounded text-sm text-wrap overflow-visible  border-2  border-zinc-200 '>
                      <option value="menu_order" selected="selected">Default</option>
                      <option value="popularity">Popularity</option>
                      <option value="rating">Average rating</option>
                      <option value="date">Latest</option>
                      <option value="price">Price: low to high</option>
                      <option value="price-desc">Price: high to low</option>
                    </select>
                    <input type="hidden" name="paged" value="1"></input>
                    <input type="hidden" name="banner_style" value="1"></input>
                  </div>
                  <div className='mr-4'>
                    <label for="products-per-page">Items</label>
                    <select name="products_per_page" onchange="this.form.submit()" className='bg--transparent p-1 rounded text-sm text-wrap overflow-visible  border-2  border-zinc-200 '>
                      <option value="10" className=''>10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>

                  </div>
                  <div className='flex items-center'>
                  <a className=' inline-block p-1 h-7 w-7  rounded border-1 border-zinc-700 mr-2 text-center' href="https://kidify.themebeer.com/shop/?view=grid"><BsGrid /></a>
                  <a className='inline-block p-1 h-7 w-7 text-zinc-300 rounded border-2  mr-2 text-center' href="https://kidify.themebeer.com/shop/?view=list"><HiOutlineViewList /></a>
                  </div>
                </div>
              </div>

              <div>
                <div className='flex flex-wrap grid-rows-2 '>
                  
                  <div className='flex basis-auto w-3/6 relative '>
                        
                  </div>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </>


  )
}
export default Shop