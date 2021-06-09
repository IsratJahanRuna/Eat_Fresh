import React from 'react';

const Content = () => {
    return (
        <div className=" grid grid-rows-3 gap-4 md:grid-flow-col">
        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="mutton" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Fried Rice</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=597&q=80" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Noodles</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$20</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1563104307-944928bb174a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Momo</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$12</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1615444431936-df9a932734f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Ramen</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$35</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1603087259549-0e89a252b4f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Vegetable Curry</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$45</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1614277786110-1a64e457c4c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Steak</h2>
                <p className="mb-2">Healthy, delicious, and nutritious</p>
                <span>$25</span>
            </div>
        </div>

        </div>
    );
};

export default Content;