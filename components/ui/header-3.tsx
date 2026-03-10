'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
	FileText,
	Shield,
	BookOpen,
	Tags,
	UserCircle,
	Heart,
	Rss,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();
	const isHome = pathname === '/';
	const scrolled = useScroll(60);
	const showSolid = !isHome || scrolled;

	React.useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [open]);

	React.useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
				showSolid
					? 'bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
					: 'bg-transparent border-b border-transparent',
			)}
		>
			<nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-8">
				{/* Logo */}
				<Link href="/" className="hover:opacity-80 transition-opacity duration-500">
					<SebastionLogo className="h-8 w-8" />
				</Link>

				{/* Desktop nav — right-aligned */}
				<div className="hidden md:flex items-center gap-1">
					<NavigationMenu>
						<NavigationMenuList className="gap-0">
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent text-[0.8125rem] font-medium tracking-wide text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] data-[state=open]:text-[var(--color-text-primary)] transition-colors">
									Content
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[420px] grid-cols-2 gap-1 p-2">
										{contentLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent text-[0.8125rem] font-medium tracking-wide text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] data-[state=open]:text-[var(--color-text-primary)] transition-colors">
									About
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[320px] gap-1 p-2">
										{aboutLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/tags"
										className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-[0.8125rem] font-medium tracking-wide text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
									>
										Topics
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					<div className="ml-4 flex items-center gap-3 border-l border-[var(--color-border)] pl-5">
						<Link
							href="/feed.xml"
							className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors"
						>
							<Rss className="size-3.5" />
							RSS
						</Link>
						<Link
							href="/sponsor"
							className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-text-primary)] px-4 py-1.5 text-xs font-medium text-[var(--color-bg)] hover:bg-[var(--color-brand)] transition-colors duration-300"
						>
							<Heart className="size-3" />
							Sponsor
						</Link>
					</div>
				</div>

				{/* Mobile toggle */}
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden flex flex-col gap-[5px] p-2"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5 text-[var(--color-text-primary)]" duration={300} />
				</button>
			</nav>

			{/* Mobile menu */}
			<MobileMenu open={open}>
				<div className="flex flex-col gap-6 pt-2">
					<div className="flex flex-col">
						<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-2 px-2">Content</span>
						{contentLinks.map((link) => (
							<MobileLink key={link.title} {...link} pathname={pathname} />
						))}
					</div>
					<div className="flex flex-col">
						<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-2 px-2">About</span>
						{aboutLinks.map((link) => (
							<MobileLink key={link.title} {...link} pathname={pathname} />
						))}
					</div>
				</div>
				<div className="mt-auto flex items-center gap-4 border-t border-[var(--color-border)] pt-4">
					<Link
						href="/feed.xml"
						className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors"
					>
						<Rss className="size-3.5" />
						RSS
					</Link>
					<Link
						href="/sponsor"
						className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[var(--color-text-primary)] px-5 py-2 text-[13px] font-medium text-[var(--color-bg)] hover:bg-[var(--color-brand)] transition-colors"
					>
						<Heart className="size-3" />
						Sponsor
					</Link>
				</div>
			</MobileMenu>
		</header>
	);
}

function MobileMenu({ open, children }: { open: boolean; children: React.ReactNode }) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className="fixed top-16 right-0 bottom-0 left-0 z-40 bg-[var(--color-bg)]/98 backdrop-blur-md md:hidden overflow-hidden border-t border-[var(--color-border)]"
		>
			<div className="flex flex-col h-full p-6 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
				{children}
			</div>
		</div>,
		document.body,
	);
}

function MobileLink({ title, href, icon: Icon, pathname }: LinkItem & { pathname: string }) {
	const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
	return (
		<Link
			href={href}
			className={cn(
				'flex items-center gap-3 rounded-md px-2 py-2.5 text-[0.9375rem] font-medium transition-colors',
				isActive
					? 'text-[var(--color-text-primary)]'
					: 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]',
			)}
		>
			<Icon className="size-4" />
			{title}
		</Link>
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	href,
}: LinkItem) {
	return (
		<NavigationMenuLink asChild>
			<Link
				href={href}
				className="flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-[var(--color-bg-subtle)]"
			>
				<Icon className="size-4 mt-0.5 shrink-0 text-[var(--color-text-tertiary)]" />
				<div className="flex flex-col">
					<span className="text-[13px] font-medium text-[var(--color-text-primary)]">{title}</span>
					{description && (
						<span className="text-[11px] leading-snug text-[var(--color-text-tertiary)]">{description}</span>
					)}
				</div>
			</Link>
		</NavigationMenuLink>
	);
}

const contentLinks: LinkItem[] = [
	{
		title: 'Research',
		href: '/posts',
		description: 'In-depth security analysis & walkthroughs',
		icon: FileText,
	},
	{
		title: 'Intelligence',
		href: '/intelligence',
		description: 'Threat intel & security briefings',
		icon: Shield,
	},
	{
		title: 'Digests',
		href: '/digests',
		description: 'Weekly curated security summaries',
		icon: BookOpen,
	},
	{
		title: 'Topics',
		href: '/tags',
		description: 'Browse by domain & category',
		icon: Tags,
	},
];

const aboutLinks: LinkItem[] = [
	{
		title: 'About Sebastion',
		href: '/about',
		description: 'Mission, approach & the team',
		icon: UserCircle,
	},
	{
		title: 'Sponsor',
		href: '/sponsor',
		description: 'Support independent security research',
		icon: Heart,
	},
];


function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}


const SebastionLogo = (props: React.ComponentProps<"svg">) => (
	<svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
		<rect width="512" height="512" rx="64" fill="#2C2520"/>
		<text
			x="256" y="370"
			textAnchor="middle"
			fontFamily="Georgia, 'Times New Roman', serif"
			fontWeight="400"
			fontSize="320"
			letterSpacing="-8"
			fill="#FAF7F2"
		>S</text>
		<rect x="48" y="48" width="416" height="416" rx="24" fill="none" stroke="#8B6914" strokeWidth="6" opacity="0.35"/>
	</svg>
);
