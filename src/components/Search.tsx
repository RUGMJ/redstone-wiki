import 'web-streams-polyfill/es2018';
import type { MDXInstance } from 'astro';
import { useState } from 'react';

// 	return (
// 		<div className='nav-search'>
// 			<input
// 				type='search'
// 				placeholder='Search...'
// 				ref={inputElement}
// 				onChange={e => (input = e.target.value)}
// 			/>
// 			<ul className='nav-search-results'>
// 				{pages
// 					.filter(page =>
// 						page.title.toLowerCase().includes(input.toLowerCase()),
// 					)
// 					.map(page => (
// 						<li key={page.title}>
// 							<p>{page.title}</p>
// 							<p>{page.description}</p>
// 						</li>
// 					))}
// 			</ul>
// 		</div>
// 	);
// }

interface searchParams {
	pages: MDXInstance<Record<string, any>>[];
}

export default function Search({ pages }: searchParams) {
	const [searchInp, setSearchInp] = useState('');
	function search() {
		if (!searchInp) return pages;
		return pages.filter(page => {
			return (
				page.frontmatter.title.toLowerCase().match(searchInp.toLowerCase()) ||
				page.frontmatter.description
					.toLowerCase()
					.match(searchInp.toLowerCase())
			);
		});
	}

	return (
		<div className='nav-search'>
			<input
				type='search'
				placeholder='Search...'
				onChange={e => setSearchInp(e.target.value)}
				value={searchInp}
			/>
			<ul className='nav-search-results'>
				{search().map(page => (
					<li className='nav-search-result' key={page.frontmatter.title}>
						<a href={page.url} className='title'>
							{page.frontmatter.title}
						</a>
						<p className='description'>{page.frontmatter.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
