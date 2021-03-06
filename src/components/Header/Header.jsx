import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineShopping, AiOutlineUnorderedList } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import header from '../Header/header.module.scss';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const carts = useSelector((state) => state.carts);
    const [qty, setQty] = useState([]);
    useEffect(() => {
        if (carts.carts) {
            const newQty = carts?.carts.map((item) => item.quantityCount);
            setQty(newQty);
        }
    }, [carts.carts]);
    const totalQuantity = qty?.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    // console.log(totalQuantity);

    return (
        <div className={clsx(header.header)}>
            <div className={clsx(header.container)}>
                <Link to="/" className={clsx(header.logo)}>
                    <svg
                        className={clsx(header.logoImg)}
                        viewBox="206.963 237.642 86.074 24.715"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(31.261901, 75.799815)">
                                <g>
                                    <path d="M 0.703125 0 L 3.640625 0 L 3.640625 -4.816406 L 12.765625 -4.816406 C 13.328125 -4.816406 13.804688 -4.359375 13.804688 -3.746094 L 13.804688 0 L 16.742188 0 L 16.742188 -3.746094 C 16.742188 -5.875 15.15625 -7.492188 12.765625 -7.492188 L 3.640625 -7.492188 L 3.640625 -12.292969 L 0.703125 -12.292969 Z M 0.703125 0 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(48.704645, 75.799815)">
                                <g>
                                    <path d="M 4.675781 0 L 17.003906 0 L 17.003906 -7.492188 L 4.675781 -7.492188 C 2.285156 -7.492188 0.703125 -5.875 0.703125 -3.746094 C 0.703125 -1.617188 2.285156 0 4.675781 0 Z M 3.640625 -3.746094 C 3.640625 -4.359375 4.113281 -4.816406 4.675781 -4.816406 L 14.066406 -4.816406 L 14.066406 -2.671875 L 4.675781 -2.671875 C 4.113281 -2.671875 3.640625 -3.128906 3.640625 -3.746094 Z M 3.640625 -3.746094 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(66.411139, 75.799815)">
                                <g>
                                    <path d="M 0.703125 0 L 12.765625 0 C 15.15625 0 16.742188 -1.617188 16.742188 -3.746094 C 16.742188 -5.875 15.15625 -7.492188 12.765625 -7.492188 L 3.640625 -7.492188 L 3.640625 -12.308594 L 0.703125 -12.308594 Z M 3.640625 -2.671875 L 3.640625 -4.816406 L 12.765625 -4.816406 C 13.328125 -4.816406 13.804688 -4.359375 13.804688 -3.746094 C 13.804688 -3.128906 13.328125 -2.671875 12.765625 -2.671875 Z M 3.640625 -2.671875 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(83.853883, 75.799815)">
                                <g>
                                    <path d="M 4.675781 0 L 12.765625 0 C 15.15625 0 16.742188 -1.617188 16.742188 -3.746094 L 16.742188 -7.492188 L 13.804688 -7.492188 L 13.804688 -3.746094 C 13.804688 -3.128906 13.328125 -2.671875 12.765625 -2.671875 L 4.675781 -2.671875 C 4.113281 -2.671875 3.640625 -3.128906 3.640625 -3.746094 L 3.640625 -7.492188 L 0.703125 -7.492188 L 0.703125 -3.746094 C 0.703125 -1.617188 2.285156 0 4.675781 0 Z M 4.675781 0 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(101.296626, 75.799815)">
                                <g>
                                    <path d="M 13.804688 -1.335938 L 13.804688 0 L 16.742188 0 L 16.742188 -1.335938 C 16.742188 -3.464844 15.15625 -5.082031 12.765625 -5.082031 L 4.675781 -5.082031 C 4.113281 -5.082031 3.640625 -5.539062 3.640625 -6.15625 L 3.640625 -7.492188 L 0.703125 -7.492188 L 0.703125 -6.15625 C 0.703125 -4.027344 2.285156 -2.410156 4.675781 -2.410156 L 12.765625 -2.410156 C 13.328125 -2.410156 13.804688 -1.953125 13.804688 -1.335938 Z M 13.804688 -1.335938 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(50.99785, 88.096855)">
                                <g>
                                    <path d="M 0.484375 -3.609375 L 2.34375 -3.609375 L 2.34375 -3.265625 L 0.859375 -3.265625 L 0.859375 -1.9375 L 2 -1.9375 L 2 -1.59375 L 0.859375 -1.59375 L 0.859375 0 L 0.484375 0 Z M 0.484375 -3.609375 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(56.220234, 88.096855)">
                                <g>
                                    <path d="M 1.75 0.046875 C 1.5625 0.046875 1.382812 0.0078125 1.21875 -0.0625 C 1.0625 -0.132812 0.925781 -0.234375 0.8125 -0.359375 C 0.695312 -0.492188 0.609375 -0.65625 0.546875 -0.84375 C 0.484375 -1.03125 0.453125 -1.238281 0.453125 -1.46875 L 0.453125 -3.609375 L 0.828125 -3.609375 L 0.828125 -1.5 C 0.828125 -1.320312 0.847656 -1.15625 0.890625 -1 C 0.941406 -0.851562 1.007812 -0.726562 1.09375 -0.625 C 1.175781 -0.519531 1.273438 -0.4375 1.390625 -0.375 C 1.503906 -0.320312 1.632812 -0.296875 1.78125 -0.296875 C 1.925781 -0.296875 2.054688 -0.320312 2.171875 -0.375 C 2.285156 -0.4375 2.382812 -0.519531 2.46875 -0.625 C 2.550781 -0.726562 2.613281 -0.851562 2.65625 -1 C 2.707031 -1.15625 2.734375 -1.320312 2.734375 -1.5 L 2.734375 -3.609375 L 3.09375 -3.609375 L 3.09375 -1.46875 C 3.09375 -1.238281 3.0625 -1.03125 3 -0.84375 C 2.9375 -0.65625 2.84375 -0.492188 2.71875 -0.359375 C 2.601562 -0.234375 2.460938 -0.132812 2.296875 -0.0625 C 2.128906 0.0078125 1.945312 0.046875 1.75 0.046875 Z M 1.75 0.046875 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(62.438642, 88.096855)">
                                <g>
                                    <path d="M 0.484375 -3.609375 L 1.34375 -3.609375 C 1.53125 -3.609375 1.695312 -3.582031 1.84375 -3.53125 C 2 -3.476562 2.128906 -3.40625 2.234375 -3.3125 C 2.347656 -3.21875 2.4375 -3.101562 2.5 -2.96875 C 2.5625 -2.84375 2.59375 -2.703125 2.59375 -2.546875 C 2.59375 -2.421875 2.570312 -2.300781 2.53125 -2.1875 C 2.488281 -2.082031 2.429688 -1.984375 2.359375 -1.890625 C 2.285156 -1.804688 2.195312 -1.734375 2.09375 -1.671875 C 2 -1.609375 1.894531 -1.5625 1.78125 -1.53125 L 2.796875 0 L 2.34375 0 L 1.34375 -1.484375 L 0.859375 -1.484375 L 0.859375 0 L 0.484375 0 Z M 1.34375 -1.84375 C 1.601562 -1.84375 1.8125 -1.90625 1.96875 -2.03125 C 2.125 -2.15625 2.203125 -2.332031 2.203125 -2.5625 C 2.203125 -2.769531 2.125 -2.9375 1.96875 -3.0625 C 1.8125 -3.195312 1.601562 -3.265625 1.34375 -3.265625 L 0.859375 -3.265625 L 0.859375 -1.84375 Z M 1.34375 -1.84375 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(68.118657, 88.096855)">
                                <g>
                                    <path d="M 0.859375 -2.8125 L 0.859375 0 L 0.484375 0 L 0.484375 -3.71875 L 0.59375 -3.71875 L 3.03125 -0.796875 L 3.03125 -3.609375 L 3.390625 -3.609375 L 3.390625 0.109375 L 3.28125 0.109375 Z M 0.859375 -2.8125 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(74.660099, 88.096855)">
                                <g>
                                    <path d="M 0.484375 -3.609375 L 0.859375 -3.609375 L 0.859375 0 L 0.484375 0 Z M 0.484375 -3.609375 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(78.671098, 88.096855)">
                                <g>
                                    <path d="M 1.34375 -3.265625 L 0.15625 -3.265625 L 0.15625 -3.609375 L 2.90625 -3.609375 L 2.90625 -3.265625 L 1.71875 -3.265625 L 1.71875 0 L 1.34375 0 Z M 1.34375 -3.265625 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(84.404951, 88.096855)">
                                <g>
                                    <path d="M 1.75 0.046875 C 1.5625 0.046875 1.382812 0.0078125 1.21875 -0.0625 C 1.0625 -0.132812 0.925781 -0.234375 0.8125 -0.359375 C 0.695312 -0.492188 0.609375 -0.65625 0.546875 -0.84375 C 0.484375 -1.03125 0.453125 -1.238281 0.453125 -1.46875 L 0.453125 -3.609375 L 0.828125 -3.609375 L 0.828125 -1.5 C 0.828125 -1.320312 0.847656 -1.15625 0.890625 -1 C 0.941406 -0.851562 1.007812 -0.726562 1.09375 -0.625 C 1.175781 -0.519531 1.273438 -0.4375 1.390625 -0.375 C 1.503906 -0.320312 1.632812 -0.296875 1.78125 -0.296875 C 1.925781 -0.296875 2.054688 -0.320312 2.171875 -0.375 C 2.285156 -0.4375 2.382812 -0.519531 2.46875 -0.625 C 2.550781 -0.726562 2.613281 -0.851562 2.65625 -1 C 2.707031 -1.15625 2.734375 -1.320312 2.734375 -1.5 L 2.734375 -3.609375 L 3.09375 -3.609375 L 3.09375 -1.46875 C 3.09375 -1.238281 3.0625 -1.03125 3 -0.84375 C 2.9375 -0.65625 2.84375 -0.492188 2.71875 -0.359375 C 2.601562 -0.234375 2.460938 -0.132812 2.296875 -0.0625 C 2.128906 0.0078125 1.945312 0.046875 1.75 0.046875 Z M 1.75 0.046875 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(90.62336, 88.096855)">
                                <g>
                                    <path d="M 0.484375 -3.609375 L 1.34375 -3.609375 C 1.53125 -3.609375 1.695312 -3.582031 1.84375 -3.53125 C 2 -3.476562 2.128906 -3.40625 2.234375 -3.3125 C 2.347656 -3.21875 2.4375 -3.101562 2.5 -2.96875 C 2.5625 -2.84375 2.59375 -2.703125 2.59375 -2.546875 C 2.59375 -2.421875 2.570312 -2.300781 2.53125 -2.1875 C 2.488281 -2.082031 2.429688 -1.984375 2.359375 -1.890625 C 2.285156 -1.804688 2.195312 -1.734375 2.09375 -1.671875 C 2 -1.609375 1.894531 -1.5625 1.78125 -1.53125 L 2.796875 0 L 2.34375 0 L 1.34375 -1.484375 L 0.859375 -1.484375 L 0.859375 0 L 0.484375 0 Z M 1.34375 -1.84375 C 1.601562 -1.84375 1.8125 -1.90625 1.96875 -2.03125 C 2.125 -2.15625 2.203125 -2.332031 2.203125 -2.5625 C 2.203125 -2.769531 2.125 -2.9375 1.96875 -3.0625 C 1.8125 -3.195312 1.601562 -3.265625 1.34375 -3.265625 L 0.859375 -3.265625 L 0.859375 -1.84375 Z M 1.34375 -1.84375 " />
                                </g>
                            </g>
                        </g>
                        <g fill="#000000" fillOpacity="1" transform="matrix(1, 0, 0, 1, 174.998077, 174.151276)">
                            <g transform="translate(96.303376, 88.096855)">
                                <g>
                                    <path d="M 0.484375 -3.609375 L 2.34375 -3.609375 L 2.34375 -3.265625 L 0.859375 -3.265625 L 0.859375 -2.046875 L 2 -2.046875 L 2 -1.703125 L 0.859375 -1.703125 L 0.859375 -0.34375 L 2.375 -0.34375 L 2.375 0 L 0.484375 0 Z M 0.484375 -3.609375 " />
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
                {/* Navbar */}
                <div
                    className={clsx(header.navbar, showMenu && header.active)}
                    style={{
                        right: showMenu ? '0' : '-100%',
                    }}
                >
                    <div
                        className={clsx(header.close, showMenu && header.active)}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <AiOutlineClose />
                    </div>
                    {/* nav-container , input */}
                    <div className={clsx(header.navbar_container)}>
                        <div className={clsx(header.input__container)} style={{ display: showSearch ? 'flex' : '' }}>
                            <label className={clsx(header.input)}>
                                <input className={clsx(header.input__field)} type="text" placeholder=" " />
                                <span className={clsx(header.input__label)}>Searching</span>
                            </label>
                            <button>
                                <AiOutlineSearch />
                            </button>
                            <button onClick={() => setShowSearch(!showSearch)}>???n</button>
                        </div>
                    </div>
                </div>

                {/* menu */}
                <div className={clsx(header.menulist)}>
                    <div className={clsx(header.menu)}>
                        <Link
                            to="/login"
                            className={clsx(header.login, showMenu && header.active)}
                            style={{
                                width: showMenu ? '100%' : '',
                                margin: showMenu ? '100px 0 0 0' : '',
                            }}
                        >
                            LOG IN
                        </Link>
                        <div
                            className={clsx(header.search)}
                            style={{ display: showSearch ? 'none' : '' }}
                            onClick={() => setShowSearch(!showSearch)}
                        >
                            <AiOutlineSearch />
                        </div>
                    </div>

                    {/* <div className={clsx(header.carts)}>
          </div> */}
                    <Link to="/carts" className={clsx(header.carts)}>
                        <div>
                            <AiOutlineShopping />
                            {totalQuantity !== 0 ? <span>{totalQuantity}</span> : ''}
                        </div>
                    </Link>
                    <div className={clsx(header.app)} onClick={() => setShowMenu(!showMenu)}>
                        <AiOutlineUnorderedList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
