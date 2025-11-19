export const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);
};

export const formatEvents = (data) => {
    return data.map(item => {
        const [year, month, day] = item.date.split('-').map(Number); // Tách năm, tháng, ngày
        const [startHour, startMinute] = item.start_time.split(':').map(Number); // Tách giờ, phút bắt đầu
        const [endHour, endMinute] = item.end_time.split(':').map(Number); // Tách giờ, phút kết thúc

        return {
            id: item.id,
            title: item.purpose,
            date: item.date,
            start: new Date(year, month - 1, day, startHour, startMinute), // Lưu ý: tháng bắt đầu từ 0
            end: new Date(year, month - 1, day, endHour, endMinute),
            user: {
                name: item.user.name
            },
            room: {
                name: item.room.name
            }
        };
    });
};

export function addIndex(array) {
    return array.map((item, index) => ({
        ...item,
        index: index + 1, // Thêm số thứ tự, bắt đầu từ 1
    }));
}

export function slugify(str) {
    return str
        .toLowerCase()
        .normalize('NFD')                     // tách dấu ra khỏi ký tự
        .replace(/[\u0300-\u036f]/g, '')      // xóa các dấu (accent)
        .replace(/đ/g, 'd')                   // chuyển đ -> d
        .replace(/[^a-z0-9\s-]/g, '')         // xóa ký tự đặc biệt
        .replace(/\s+/g, '-')                 // thay khoảng trắng bằng dấu -
        .replace(/-+/g, '-')                  // loại bỏ dấu - thừa
        .replace(/^-+|-+$/g, '');             // xóa - ở đầu và cuối
}


export function dataToFormData(data) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
            formData.append(key, value);
        } else if (typeof value === 'boolean') {
            formData.append(key, value ? '1' : '0');
        } else if (value !== undefined && value !== null) {
            formData.append(key, value);
        }
    });
    return formData;
}

export const formatToCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount)
}







