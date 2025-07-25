import { environment } from '@/environment';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
} from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { useMemo, type ReactNode } from 'react';
import { useRoute } from 'ziggy-js';

const { VITE_APP_ENV } = environment;

export default ({ children, heading }: { children: ReactNode; heading: string }) => {
    const route = useRoute();
    const { url } = usePage();

    const links = useMemo(
        () => [
            { href: route('dashboard'), children: 'Dashboard' },
            { href: '#', children: 'Team' },
            { href: '#', children: 'Projects' },
            { href: '#', children: 'Calendar' },
            { href: '#', children: 'Reports' }
        ],
        [route]
    );

    return (
        <div className="flex min-h-dvh flex-col">
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img className="size-8" src="favicon.svg" alt="Your Company" />
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    {links.map(({ href, children }, index) => (
                                        <Link
                                            key={index}
                                            className={
                                                url === href
                                                    ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                                    : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }
                                            href="/"
                                            aria-current={url === href ? 'page' : false}
                                            prefetch
                                            children={children}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                        />
                                    </svg>
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img alt="" src="default.svg" className="size-8 rounded-full" />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        {/* Active: "bg-gray-100 outline-hidden", Not Active: "" */}
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Your Profile
                                            </a>
                                        </MenuItem>

                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Settings
                                            </a>
                                        </MenuItem>

                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Sign out
                                            </a>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {/* Menu open: "hidden", Menu closed: "block" */}
                                <svg
                                    className="block size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>

                                {/* Menu open: "block", Menu closed: "hidden" */}
                                <svg
                                    className="hidden size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <DisclosurePanel className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        {links.map(({ href, children }, index) => (
                            <Link
                                key={index}
                                className={
                                    url === href
                                        ? 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
                                        : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                }
                                href={href}
                                aria-current={url === href ? 'page' : false}
                                prefetch
                                children={children}
                            />
                        ))}
                    </div>

                    <div className="border-t border-gray-700 pt-4 pb-3">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <img className="size-10 rounded-full" src="default.svg" alt="" />
                            </div>

                            <div className="ml-3">
                                <div className="text-base/5 font-medium text-white">Tom Cook</div>
                                <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                            </div>

                            <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-3 space-y-1 px-2">
                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Your Profile
                            </a>

                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Settings
                            </a>

                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>

            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{heading}</h1>
                </div>
            </header>

            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
            </main>

            <footer>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <ul className="*:inline-block *:not-last:mr-2 *:not-first:before:mr-2 *:not-first:before:content-['_·_']">
                        <li>
                            <Link className="underline" href={route('playground')} prefetch>
                                Playground
                            </Link>
                        </li>

                        {VITE_APP_ENV === 'local' ? (
                            <li>
                                <a
                                    className="underline"
                                    href="https://github.com/SantosVilanculos/skeleton-inertiajs"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Source code
                                </a>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </footer>
        </div>
    );
};
