import {
    ContentCopy,
    ContentPaste,
    Article,
    Note,
    Description,
    Inventory,
    Category,
    Apartment,
    Language,
    EditAttributes,
    Work,
    BurstMode,
    Person,
    DeveloperBoard,
    Settings,
    Grading,
    LocalMall,
    People,
    Store,
    Payment,
    Tune,
    Factory,
    MotionPhotosAuto,
    Build,
    Quiz,
    Email
}
    from '@mui/icons-material';

const menusData = [
    {
        icon: <ContentCopy />,
        label: 'Quản lý nội dung',
        children: [
            { icon: <ContentPaste />, label: 'Danh mục trang', url: 'page-category' },
            { icon: <Article />, label: 'Trang', url: 'page' },
            { icon: <Note />, label: 'Danh mục bài viết', url: 'post-category' },
            { icon: <Description />, label: 'Quản lý bài viết', url: 'post' },
        ],
    },

    {
        icon: <Inventory />,
        label: 'Quản lý sản phẩm',
        children: [
            { icon: <Category />, label: 'Danh mục sản phẩm', url: 'product-category' },
            { icon: <Apartment />, label: 'Nhà cung cấp', url: 'brand' },
            { icon: <Language />, label: 'Xuất sứ', url: 'origin' },
            { icon: <EditAttributes />, label: 'Trường thông tin', url: 'attribute' },
            { icon: <Work />, label: 'Quản lý sản phẩm', url: 'product' },
        ],
    },
    {
        icon: <Grading />,
        label: 'Quản lý bán hàng',
        children: [
            { icon: <Payment />, label: 'Payment', url: 'payment' },
            { icon: <LocalMall />, label: 'Đơn hàng', url: 'order' },
            { icon: <People />, label: 'Khách hàng', url: 'customer' },
            { icon: <Factory />, label: 'Tra cứu bảo hành', url: 'warranty' },
            { icon: <MotionPhotosAuto />, label: 'Chương trình khuyến mại', url: 'promotion' },
        ],
    },
    {
        icon: <Quiz />,
        label: 'Giao diện & thông tin',
        children: [

            { icon: <Email />, label: 'Email Subscription', url: 'email-subscription' },
            { icon: <BurstMode />, label: 'Banner', url: 'banner' },
            { icon: <Tune />, label: 'Slider', url: 'slider' },
            { icon: <Store />, label: 'Showroom', url: 'show-room' },
        ],
    },
    {
        icon: <Build />,
        label: 'Hệ thống',
        children: [

            { icon: <Person />, label: 'Người dùng', url: 'user' },
            { icon: <DeveloperBoard />, label: 'Nhóm quyền', url: 'role' },
            { icon: <Settings />, label: 'Cài đặt trang', url: 'setting' },
        ],
    },
];

export default menusData