<!-- Header.svelte -->
<script lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import { SearchIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { BellIcon, MenuIcon, XIcon } from '@rgossiaux/svelte-heroicons/outline';

	const home_link = { href: '/', label: 'Home' };
	const all_links = [
		home_link,
		{ href: '/blog', label: 'Blog' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' }
	];
	const links_without_home = all_links.filter((link) => link.href !== '/');
</script>

<header>
	<Disclosure let:open as="nav" class="bg-gray-800">
		<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="flex items-center px-2 lg:px-0">
					<div class="flex-shrink-0">
						<a href="/">
							<!-- <img
								class="block lg:hidden h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Saxon.wtf"
							/>
							<img
								class="hidden lg:block h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
								alt="Saxon.wtf"
							/> -->
							<h1>saxon.wtf</h1>
						</a>
					</div>

					<div class="hidden lg:block lg:ml-6">
						<div class="flex space-x-4">
							<a
								href={home_link.href}
								class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								{home_link.label}
							</a>

							{#each links_without_home as non_home_link}
								<a
									href={non_home_link.href}
									class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									{non_home_link.label}
								</a>
							{/each}
						</div>
					</div>
				</div>

				<div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
					<div class="max-w-lg w-full lg:max-w-xs">
						<label for="search" class="sr-only"> Search </label>
						<div class="relative">
							<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
							</div>
							<input
								id="search"
								name="search"
								class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
								placeholder="Search"
								type="search"
							/>
						</div>
					</div>
				</div>

				<div class="flex lg:hidden">
					<!-- mobile menu button -->

					<DisclosureButton
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Open main menu</span>
						{#if open}
							<XIcon class="block h-6 w-6" aria-hidden="true" />
						{:else}
							<MenuIcon class="block h-6 w-6" aria-hidden="true" />
						{/if}
					</DisclosureButton>
				</div>
				<!-- <div class="hidden lg:block lg:ml-4">
					<div class="flex items-center">
						<button
							type="button"
							class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span class="sr-only">View notifications</span>
							<BellIcon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</div> -->
			</div>
		</div>

		<!-- mobile menu panel -->
		<DisclosurePanel class="lg:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<DisclosureButton
					as="a"
					href={home_link.href}
					class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
				>
					{home_link.label}
				</DisclosureButton>

				{#each links_without_home as non_home_link}
					<DisclosureButton
						as="a"
						href={non_home_link.href}
						class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						{non_home_link.label}
					</DisclosureButton>
				{/each}
			</div>
		</DisclosurePanel>
	</Disclosure>
</header>
