import {Children} from 'react';

export const Show = (props: { children: any; }) => {
	let when: null = null;
	let otherwise: null = null;

	Children.forEach(props.children, child => {
		if (child.props.isTrue) {
			otherwise = child;
		} else if (!when && child.props.isTrue) {
			when = child;
		}
	});
	return when || otherwise;
}

Show.When = ({ isTrue, children }: { isTrue: boolean, children: React.ReactNode }) => isTrue && children;
Show.Else = ({ render, children }: { render: React.ReactNode, children: React.ReactNode }) => render || children;
// Show.Else = ({ render, children }: { render: React.ReactNode, children: React.ReactNode }) => render || children;
