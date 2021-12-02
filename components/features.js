const Features = () => (
  <section className="py-12 md:py-32 overflow-x-hidden">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="py-6 lg:pr-32">
            <div className="mb-4">
              <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Lorem ipsum</span>
              <h2 className="text-4xl mt-3 font-bold font-heading">Key Features</h2>
            </div>
            <div className="flex items-start py-4">
              <div className="w-8 mr-5 text-blue-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold font-heading">Easy to customize</h3>
                <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
              </div>
            </div>
            <div className="flex items-start py-4">
              <div className="w-8 mr-5 text-blue-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold font-heading">Flexible software</h3>
                <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
              </div>
            </div>
            <div className="flex items-start py-4">
              <div className="w-8 mr-5 text-blue-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold font-heading">Best access for all of the resources</h3>
                <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
          <img className="relative mx-auto rounded-xl w-full z-10" src="https://images.unsplash.com/photo-1536940135352-b4b3875df888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=1050&q=80" alt />
          <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="metis-assets/elements/blob-tear.svg" alt />
          <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="metis-assets/elements/blob-tear.svg" alt />
        </div>
      </div>
    </div>
  </section>
);

export default Features;
