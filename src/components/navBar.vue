<template>


  <nav
    class="bg-neutral-300 dark:bg-neutral-800 fixed w-full z-20 bottom-0 start-0 border-t border-neutral-500 dark:border-neutral-600">
    <div class="pt-4 pb-4">
      <ul class="flex flex-row justify-evenly">
        <li>
          <router-link to="/append">
            <PlusCircleIcon class="w-9 h-9"
                          :class="$route.path === '/calendar' ? 'text-black dark:text-white font-bold' : 'dark:text-gray-600 text-gray-400'"/>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <HomeIcon class="w-9 h-9"
                      :class="$route.path === '/' ? 'text-black dark:text-white font-bold' : 'dark:text-gray-600 text-gray-400'"/>
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <Cog6ToothIcon class="w-9 h-9"
                           :class="$route.path === '/settings' ? 'text-black dark:text-white font-bold' : 'dark:text-gray-600 text-gray-400'"/>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>


</template>
<script setup lang="ts">
import {HomeIcon, PlusCircleIcon, Cog6ToothIcon} from "@heroicons/vue/24/outline"
</script>