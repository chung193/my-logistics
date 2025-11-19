import React from 'react';
import { Breadcrumb, Divider, Icon } from 'uiw';

export default function MyBreadcrumb() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <Divider />
        </div>
    );
}