<template>
<div>
<!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <h1 class="text-white text-xl font-bold" style="text-shadow: 2px 2px black;">Ticket Management</h1>
      </div>
      <div class="mt-5 flex-1 flex flex-col">
        <nav class="flex-1 px-2 pb-4 space-y-1">
          <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
            <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
            {{ item.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
  <div class="md:pl-64 flex flex-col flex-1">
    <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <div class="flex-1 px-4 flex justify-between">
        <!-- <div class="flex-1 flex">
          <form class="w-full flex md:ml-0" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <SearchIcon class="h-5 w-5" aria-hidden="true" />
              </div>
              <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
            </div>
          </form> -->
        </div>
        <div class="ml-4 flex items-center md:ml-6">

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative mr-3">
            <div>
              <div class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" />
              </div>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            </transition>
          </Menu>
        </div>
      </div>
    </div>
<router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
    created() {
    },
    data() {
        return {
            navigation: [ {name:'Check Status', href:'/',icon:'',current:true}, 
                          {name:'Report', href:'/report',icon:'',current:true},
                          {name:'Dashboard', href:'/dashboard',icon:'',current:true},
                          {name:'Manage', href:'/manage',icon:'',current:true}
                        ]
        }
    }
}
</script>

<style>

</style>