// DATA SYNC
let adminProducts = [];
let adminOrders = [];
let adminUsers = [];
let adminCategories = ["skincare", "makeup", "bodycare", "perfume", "trang-diem", "cham-soc-da", "haircare"];

/**
 * Helper: Lấy dữ liệu mới nhất từ LocalStorage
 */
function refreshData() {
    adminProducts = JSON.parse(localStorage.getItem('qh_products')) || [];
    adminOrders = JSON.parse(localStorage.getItem('qh_orders')) || [];
    adminUsers = JSON.parse(localStorage.getItem('qh_users')) || [];
}

function saveData() {
    localStorage.setItem('qh_products', JSON.stringify(adminProducts));
}

/**
 * Helper: Định dạng tiền tệ
 */
function formatCurrency(amount) {
    if (typeof amount === 'number') return amount.toLocaleString('vi-VN') + 'đ';
    if (typeof amount === 'string') {
        const num = parseInt(amount.replace(/[^0-9]/g, ''));
        return (num || 0).toLocaleString('vi-VN') + 'đ';
    }
    return '0đ';
}

/**
 * Helper: Lấy thống kê đơn hàng theo trạng thái
 */
function getOrderStats() {
    const stats = {
        total: adminOrders.length,
        pending: 0,
        processing: 0,
        shipped: 0,
        delivered: 0,
        cancelled: 0,
        totalRevenue: 0
    };
    
    adminOrders.forEach(order => {
        const status = order.status || 'Chờ xác nhận';
        if (status.includes('Chờ')) stats.pending++;
        else if (status.includes('xác nhận') || status.includes('lấy')) stats.processing++;
        else if (status.includes('giao')) stats.shipped++;
        else if (status.includes('Đã giao')) stats.delivered++;
        else if (status.includes('hủy')) stats.cancelled++;
        
        const val = typeof order.total === 'number' ? order.total : parseInt(String(order.total).replace(/[.đ]/g, '')) || 0;
        stats.totalRevenue += val;
    });
    
    return stats;
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    renderProductsList();
    renderOrdersList();
    renderCategoriesList();
    initNavigation();
});

/**
 * Helper: Định dạng ngày tháng từ ISO sang VN
 */
function formatDisplayDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr; // Trả về nguyên bản nếu không phải ISO
    return date.toLocaleString('vi-VN', { 
        year: 'numeric', month: '2-digit', day: '2-digit', 
        hour: '2-digit', minute: '2-digit' 
    });
}

// NAVIGATION
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.target;
            
            // Update UI
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            document.getElementById('pageTitle').innerText = item.innerText.trim();
        });
    });
}

// DASHBOARD
function renderDashboard() {
    refreshData();
    if(document.getElementById('totalProducts')) document.getElementById('totalProducts').innerText = adminProducts.length;
    if(document.getElementById('totalOrders')) document.getElementById('totalOrders').innerText = adminOrders.length;

    const revenue = adminOrders.reduce((sum, o) => {
        const val = typeof o.total === 'string' ? parseInt(o.total.replace(/[.đ]/g, '')) : o.total;
        return sum + (val || 0);
    }, 0);
    if(document.getElementById('totalRevenue')) document.getElementById('totalRevenue').innerText = revenue.toLocaleString() + 'đ';
}

// PRODUCT MANAGEMENT
function renderProductsList(productsToRender = null) {
    if (!productsToRender) {
        refreshData();
        productsToRender = adminProducts;
    }
    const tbody = document.getElementById('adminProductList');
    if(!tbody) return;

    tbody.innerHTML = productsToRender.map(p => `
        <tr>
            <td><img src="${p.image}" alt="" onerror="this.src='https://via.placeholder.com/50'"></td>
            <td><strong>${p.name}</strong><br><small>${p.brand}</small></td>
            <td>${Number(p.price).toLocaleString()}đ</td>
            <td><span class="badge-cat">${p.category || 'N/A'}</span></td>
            <td>
                <button class="btn btn-edit" onclick="openProductModal(${p.id})">Sửa</button>
                <button class="btn btn-delete" onclick="deleteProduct(${p.id})">Xóa</button>
            </td>
        </tr>
    `).reverse().join(''); // Hiển thị sản phẩm mới nhất lên đầu
}

function renderOrdersList() {
    refreshData();
    const tbody = document.getElementById('adminOrderList');
    if (!tbody) return;
    if (adminOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center">Chưa có đơn hàng nào</td></tr>';
        return;
    }
    tbody.innerHTML = adminOrders.map(o => `
        <tr>
            <td>#${o.id}</td>
            <td><strong>${o.customer}</strong><br><small>${o.phone}</small></td>
            <td>${typeof o.total === 'number' ? o.total.toLocaleString() + 'đ' : o.total}</td>
            <td><span class="status-pill">${o.status || 'Chờ xác nhận'}</span></td>
            <td>${formatDisplayDate(o.date)}</td>
        </tr>
    `).join('');
}

function renderCategoriesList() {
    const tbody = document.getElementById('adminCategoryList');
    if (!tbody) return;
    tbody.innerHTML = adminCategories.map((cat, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${cat}</td>
            <td><button class="btn btn-delete" onclick="deleteCategory('${cat}')">Xóa</button></td>
        </tr>
    `).join('');
}

function filterProducts() {
    refreshData();
    const term = document.getElementById('productSearch').value.toLowerCase();
    const filtered = adminProducts.filter(p => p.name.toLowerCase().includes(term));
    renderProductsList(filtered);
}

window.deleteProduct = function(id) {
    if(confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        refreshData();
        adminProducts = adminProducts.filter(p => p.id !== id);
        saveData();
        renderProductsList();
        renderDashboard();
    }
}

window.deleteCategory = function(cat) {
    if(confirm(`Xóa danh mục "${cat}"?`)) {
        adminCategories = adminCategories.filter(c => c !== cat);
        renderCategoriesList();
    }
}

window.openProductModal = function(id = null) {
    refreshData();
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    const product = id ? adminProducts.find(p => p.id === id) : null;

    document.getElementById('modalTitle').innerText = product ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới';
    
    form.innerHTML = `
        <div class="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" id="pName" value="${product ? product.name : ''}" placeholder="Nhập tên..." required>
        </div>
        <div class="form-group">
            <label>Thương hiệu</label>
            <input type="text" id="pBrand" value="${product ? product.brand : ''}" placeholder="Nhập thương hiệu..." required>
        </div>
        <div class="form-group">
            <label>Giá (VNĐ)</label>
            <input type="number" id="pPrice" value="${product ? product.price : ''}" placeholder="Ví dụ: 200000" required>
        </div>
        <div class="form-group">
            <label>Link ảnh</label>
            <input type="text" id="pImage" value="${product ? product.image : ''}" required>
        </div>
        <div class="form-group">
            <label>Danh mục</label>
            <select id="pCat">
                ${adminCategories.map(c => `<option value="${c}" ${product?.category === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
            <button type="button" class="btn" onclick="closeModal()">Hủy</button>
        </div>
    `;

    modal.classList.add('active');

    form.onsubmit = (e) => {
        e.preventDefault();
        refreshData();
        
        const newP = {
            id: product ? product.id : Date.now() + Math.floor(Math.random() * 1000),
            name: document.getElementById('pName').value,
            brand: document.getElementById('pBrand').value,
            price: parseInt(document.getElementById('pPrice').value),
            image: document.getElementById('pImage').value,
            category: document.getElementById('pCat').value,
            sold: product ? (product.sold || 0) : 0,
            updatedAt: new Date().toISOString()
        };
        
        if (!product) newP.createdAt = new Date().toISOString();

        if(product) {
            const idx = adminProducts.findIndex(p => p.id === product.id);
            adminProducts[idx] = newP;
        } else {
            adminProducts.push(newP);
        }

        saveData();
        renderProductsList();
        renderDashboard();
        closeModal();
    };
}

function closeModal() { document.getElementById('productModal').classList.remove('active'); }