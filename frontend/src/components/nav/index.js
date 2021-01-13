function NavBar() {
  return (
    <div className="w-full max-w-8xl mx-auto">
      <sidebar
        className="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white 
      lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
      >
        <div
          id="navWrapper"
          class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
        >
          <div class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"></div>
          <nav
            id="nav"
            class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)"
          >
            <h1> Teste do sidebar</h1>
          </nav>
        </div>
      </sidebar>
      <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
        <div class="w-full flex">
          <div class="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div class="pb-10 border-b border-gray-200 mb-10">
              <div class="flex items-center">
                <div class="md:flex">
                  <div class="md:flex-shrink-0">
                    <img
                      class="rounded-lg md:w-56"
                      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80"
                      width="448"
                      height="299"
                      alt="Woman paying for a purchase"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
