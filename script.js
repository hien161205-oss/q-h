/**
 * Q&H SKINLAB CLONE - ADVANCED LOGIC
 */

// 1. DATA
let isLoggedIn = localStorage.getItem('qh_isLoggedIn') === 'true';
let currentUserName = localStorage.getItem('qh_userName') || '';
let currentUserEmail = localStorage.getItem('qh_userEmail') || '';
let wishlist = JSON.parse(localStorage.getItem('qh_wishlist')) || [];
let registeredUsers = JSON.parse(localStorage.getItem('qh_users') || '[]');
const products = [
    {
        id: 1,
        name: '[NEW DEW] Son Tint Bóng Merzy Dạng Thạch, Bền Màu, Lâu Trôi Cho Đôi Môi Căng Mọng, Ẩm Mịn The Watery Dew Tint',
        brand: 'Merzy',
        category: 'trang-diem-son-moi',
        price: 179000,
        oldPrice: 309000,
        discount: '42%',
        image: 'https://product.hstatic.net/1000006063/product/wd23_c168ab0ee2c24edda27693a18de15bb5_1024x1024.jpg',
        images: [
            'https://product.hstatic.net/1000006063/product/wd23_c168ab0ee2c24edda27693a18de15bb5_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/36_3232d9509c31426c9ea371625b3fc168_1024x1024.png',
            'https://product.hstatic.net/1000006063/product/m13_1f176b01a3ef42f1ba6e7566e23a0ae5_1024x1024.jpg'
        ],
        description: 'Son Tint Bóng Dạng Thạch, Bền Màu, Lâu Trôi Merzy The Watery Dew Tint là son tint đến từ thương hiệu Merzy. Lấy cảm hứng từ tinh thần Old Money, thiết kế vỏ son tối giản mà sang trọng, nổi bật với logo chữ M được nhấn nhá tinh tế nơi phần nắp. Cùng bảng màu đa dạng với 5 màu son best-seller của dòng Watery Dew Tint và 5 sắc màu hoàn toàn mới, trendy, phù hợp với nhiều tone da. Đặc biệt, chất son vẫn giữ nguyên công thức với kết cấu dạng thạch trong suốt, chất son bóng lì, ẩm mịn, bền màu, lâu trôi mang lại vẻ đẹp tự nhiên cho đôi môi căng bóng, rạng rỡ.',
        details: 'Son Tint Bóng Dạng Thạch, Bền Màu, Lâu Trôi Merzy The Watery Dew Tint là son tint đến từ thương hiệu Merzy. Lấy cảm hứng từ tinh thần Old Money, thiết kế vỏ son tối giản mà sang trọng, nổi bật với logo chữ M được nhấn nhá tinh tế nơi phần nắp. Cùng bảng màu đa dạng với 5 màu son best-seller của dòng Watery Dew Tint và 5 sắc màu hoàn toàn mới, trendy, phù hợp với nhiều tone da. Đặc biệt, chất son vẫn giữ nguyên công thức với kết cấu dạng thạch trong suốt, chất son bóng lì, ẩm mịn, bền màu, lâu trôi mang lại vẻ đẹp tự nhiên cho đôi môi căng bóng, rạng rỡ.',
        specs: {
            'Tên sản phẩm': 'Merzy The Watery Dew Tint',
            'Chất son': 'Son thạch, son tint, son bóng',
            'Dung tích': '4g',
            'Thương hiệu': 'Merzy (Hàn Quốc)',
            'Nơi sản xuất': 'Hàn Quốc',
            'Hạn sử dụng': '36 tháng kể từ ngày sản xuất in trên bao bì - 12 tháng kể từ khi mở nắp'
        },
        sold: 25200
    },
    {
        id: 2,
        name: 'Serum Chống Nắng B.O.M Dưỡng Ẩm Water Glow Sun Serum SPF50+PA++++ 50g',
        brand: 'B.O.M',
        category: 'cham-soc-da',
        price: 438000,
        oldPrice: 548000,
        discount: '20%',
        image: 'https://cdn.hstatic.net/products/1000006063/bt_770a3fcae16d4350ad40ad252a1805fb_1024x1024.jpg',
        images: [
            'https://cdn.hstatic.net/products/1000006063/bt_770a3fcae16d4350ad40ad252a1805fb_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/download_761a7597092b4c799c8d06e2f284d44c_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/h9_f28910f385f74ac697b04ac151da657b_1024x1024.jpg'
        ],
        description: 'Serum Chống Nắng Dưỡng Ẩm B.O.M Water Glow Sun Serum là tinh chất chống nắng thuộc thương hiệu B.O.M. Sản phẩm giúp bảo vệ da phổ rộng trước tia UVA và UVB cùng khả năng cấp ẩm vượt trội. Công thức sở hữu "SOOTHING COOLER" với các thành phần giúp hạn chế tác động do nhiệt. Đồng thời chứa 89% thành phần dưỡng da như 10 loại HA, Panthenol, chiết xuất rau má, giúp nuôi dưỡng da khỏe hơn, tươi sáng, vừa bảo vệ vừa duy trì vẻ rạng rỡ mỗi ngày.',
        details: 'Serum Chống Nắng Dưỡng Ẩm B.O.M Water Glow Sun Serum là tinh chất chống nắng thuộc thương hiệu B.O.M. Sản phẩm giúp bảo vệ da phổ rộng trước tia UVA và UVB cùng khả năng cấp ẩm vượt trội. Công thức sở hữu "SOOTHING COOLER" với các thành phần giúp hạn chế tác động do nhiệt. Đồng thời chứa 89% thành phần dưỡng da như 10 loại HA, Panthenol, chiết xuất rau má, giúp nuôi dưỡng da khỏe hơn, tươi sáng, vừa bảo vệ vừa duy trì vẻ rạng rỡ mỗi ngày.',
        specs: {
            'Tên sản phẩm': 'Serum Chống Nắng Dưỡng Ẩm B.O.M Water Glow Sun Serum SPF50+PA++++',
            'Dung tích': '50g',
            'Thương hiệu': 'B.O.M (Hàn Quốc)',
            'Nơi sản xuất': 'Hàn Quốc',
            'Hạn sử dụng': '36 tháng kể từ ngày sản xuất - 12 tháng kể từ ngày mở nắp',
            'Chỉ số chống nắng': 'SPF50+PA++++',
            'Đối tượng': 'Mọi loại da'
        },
        sold: 1500
    },
    {
        id: 3,
        name: 'Kem Chống Nắng La Roche-Posay Dạng Sữa, Bảo Vệ Da Khỏi UVA Dài, Ngăn Ngừa Thâm Nám Anthelios UVMune 400 Invisible Fluid SPF50+ 50ml',
        brand: 'La Roche-Posay',
        category: 'cham-soc-da',
        price: 449000,
        oldPrice: 640000,
        discount: '30%',
        image: 'https://product.hstatic.net/1000006063/product/bth_b1850e1e326b4a60ab803afca16b55af_1024x1024.jpg',
        images: [
            'https://product.hstatic.net/1000006063/product/bth_b1850e1e326b4a60ab803afca16b55af_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/22_2d9c2cc106af4ff5a8b76a5eabf5a099_1024x1024.png',
            'https://product.hstatic.net/1000006063/product/download__9__copy_0db1ec89680a4115ab3a2719df116552_1024x1024.jpg'
        ],
        description: 'Kem Chống Nắng Dạng Sữa, Bảo Vệ Da Khỏi UVA Dài, Ngăn Ngừa Thâm Nám La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+ là dòng sản phẩm kem chống nắng có khả năng chống nắng phổ rộng, bảo vệ da toàn diện trước tác hại từ tia UVA/UVB thuộc thương hiệu La Roche-Posay. Chất kem dạng sữa có khả năng kháng trôi tối đa với kết cấu lỏng nhẹ, thẩm thấu nhanh, không nhờn rít, không để lại vệt trắng da. Sản phẩm an toàn với mọi loại da, đặc biệt được chuyên gia khuyên dùng cho da nhạy cảm với ánh nắng do cơ địa hoặc tác nhân bên ngoài.',
        details: 'Kem Chống Nắng Dạng Sữa, Bảo Vệ Da Khỏi UVA Dài, Ngăn Ngừa Thâm Nám La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+ là dòng sản phẩm kem chống nắng có khả năng chống nắng phổ rộng, bảo vệ da toàn diện trước tác hại từ tia UVA/UVB thuộc thương hiệu La Roche-Posay. Chất kem dạng sữa có khả năng kháng trôi tối đa với kết cấu lỏng nhẹ, thẩm thấu nhanh, không nhờn rít, không để lại vệt trắng da. Sản phẩm an toàn với mọi loại da, đặc biệt được chuyên gia khuyên dùng cho da nhạy cảm với ánh nắng do cơ địa hoặc tác nhân bên ngoài.',
        specs: {
            'Tên sản phẩm': 'La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+',
            'Dung tích': '50ml',
            'Thương hiệu': 'La Roche-Posay (Pháp)',
            'Nơi sản xuất': 'Pháp',
            'Hạn sử dụng': '3 năm kể từ ngày sản xuất',
            'Chỉ số chống nắng': 'SPF50+',
            'Đối tượng': 'Mọi loại da, đặc biệt da nhạy cảm'
        },
    },
    {
        id: 4,
        name: 'Kem Chống Nắng CLINICOS Truth Sunscreen SPF 50+ PA++++',
        brand: 'CLINICOS',
        category: 'cham-soc-da',
        price: 129000,
        oldPrice: 219000,
        discount: '41%',
        image: 'https://cdn.hstatic.net/products/1000006063/clinicos_1_01852f0e66eb4f66a1868e5d5c336d03_1024x1024.jpg',
        images: [
            'https://cdn.hstatic.net/products/1000006063/clinicos_1_01852f0e66eb4f66a1868e5d5c336d03_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/download__9__af2f0acce36047ca8221217379bc5092_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/download__11__31e86468b1e6423587aaae76e74ab00d_1024x1024.jpg'
        ],
        description: 'Kem Chống Nắng CLINICOS Truth Sunscreen SPF 50+ PA++++ là kem chống nắng thuộc thương hiệu CLINICOS. Sự kết hợp của Niacinamide, chiết xuất rễ cam thảo và Vitamin E giúp củng cố hàng rào bảo vệ da trước các tác nhân bụi bẩn và tác hại môi trường, mà còn hỗ trợ ngăn ngừa sạm nám, làm dịu vùng da tổn thương, chống oxi hóa, đồng thời dưỡng ẩm và nuôi dưỡng làn da sáng khỏe. Với chỉ số chống nắng SPF50 PA++++.',
        details: 'Kem Chống Nắng CLINICOS Truth Sunscreen SPF 50+ PA++++ là kem chống nắng thuộc thương hiệu CLINICOS. Sự kết hợp của Niacinamide, chiết xuất rễ cam thảo và Vitamin E giúp củng cố hàng rào bảo vệ da trước các tác nhân bụi bẩn và tác hại môi trường, mà còn hỗ trợ ngăn ngừa sạm nám, làm dịu vùng da tổn thương, chống oxi hóa, đồng thời dưỡng ẩm và nuôi dưỡng làn da sáng khỏe. Với chỉ số chống nắng SPF50 PA++++. Có 2 loại: Kem Chống Nắng Cho Da Nhạy Cảm và Kem Chống Nắng Nâng Tông Tự Nhiên.',
        specs: {
            'Tên sản phẩm': 'CLINICOS Truth Sunscreen SPF 50+ PA++++',
            'Dung tích': '10ml, 50ml',
            'Thương hiệu': 'CLINICOS (Việt Nam)',
            'Nơi sản xuất': 'Việt Nam',
            'Hạn sử dụng': '3 năm kể từ ngày sản xuất',
            'Chỉ số chống nắng': 'SPF50+ PA++++',
            'Đối tượng': 'Mọi loại da, đặc biệt da nhạy cảm'
        },
        sold: 33
    },
    {
        id: 5,
        name: 'Kem Chống Nắng Caryophy Nâng Tông Smart Sunscreen Tone Up SPF50+/PA+++ 50ml',
        brand: 'CARYOPHY',
        category: 'cham-soc-da',
        price: 310000,
        oldPrice: 360000,
        discount: '14%',
        image: 'https://product.hstatic.net/1000006063/product/a5dee1093d94a01c9bed0bd7d75_72f7f1f42a4a4a3c9f89d24674a0cc6f_1024x1024_884db8ac03f643708b5baed015ec0eb7_1024x1024.jpg',
        images: [
            'https://product.hstatic.net/1000006063/product/a5dee1093d94a01c9bed0bd7d75_72f7f1f42a4a4a3c9f89d24674a0cc6f_1024x1024_884db8ac03f643708b5baed015ec0eb7_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/1_8ad78ee4ef8d47c0a72c3d6dbfa1741d_1024x1024.png',
            'https://product.hstatic.net/1000006063/product/446_f1efbaa6e8cb4adea046ed01153f_bbb13221bad44567a371ea3d014a8d6d_1024x1024.jpg'
        ],
        description: 'Kem Chống Nắng Caryophy Nâng Tông Smart Sunscreen Tone Up SPF50+/PA+++ là kem chống nắng thuộc thương hiệu Caryophy. Sản phẩm với thành phần chiết xuất từ thiên nhiên như củ dền đỏ, rau má, rau sam, nho, các Vitamin, mang lại tác dụng 3in1 bảo vệ làn da. Có khả năng bảo vệ da hơn 98% trước tia UV, nâng tone da tự nhiên.',
        details: 'Kem Chống Nắng Caryophy Nâng Tông Smart Sunscreen Tone Up SPF50+/PA+++ là kem chống nắng thuộc thương hiệu Caryophy. Sản phẩm với thành phần chiết xuất từ thiên nhiên như củ dền đỏ, rau má, rau sam, nho, các Vitamin, mang lại tác dụng 3in1 bảo vệ làn da. Có khả năng bảo vệ da hơn 98% trước tia UV, nâng tone da tự nhiên.',
        specs: {
            'Tên sản phẩm': 'Caryophy Smart Sunscreen Tone Up SPF50+/PA+++',
            'Dung tích': '50ml',
            'Thương hiệu': 'Caryophy (Hàn Quốc)',
            'Nơi sản xuất': 'Hàn Quốc',
            'Hạn sử dụng': '3 năm kể từ ngày sản xuất',
            'Chỉ số chống nắng': 'SPF50+/PA+++',
            'Đối tượng': 'Mọi loại da, đặc biệt da xỉn màu'
        },
        sold: 2600
    },
    {
        id: 8,
        name: 'Kem Chống Nắng Nâng Tone, Kiềm Dầu, Dưỡng Ẩm Make P:rem UV Defense Me Sun Cream SPF50+/PA++++ 50ml',
        brand: 'Make P:rem',
        category: 'cham-soc-da',
        price: 309000,
        oldPrice: 450000,
        discount: '31%',
        image: 'https://product.hstatic.net/1000006063/product/bt_watery_e83562e4e591408c9801d18259120ea1_1024x1024.jpg',
        images: [
            'https://product.hstatic.net/1000006063/product/bt_watery_e83562e4e591408c9801d18259120ea1_1024x1024.jpg',
            'https://product.hstatic.net/1000006063/product/make_prem_93c720d528a04423af56f1bc861aada8_1024x1024.jpg',
            'https://product.hstatic.net/1000006063/product/download_c05eacf6bae846e28efda26483aa8ea3_1024x1024.jpg'
        ],
        description: 'Kem Chống Nắng Nâng Tone, Kiềm Dầu, Dưỡng Ẩm Make P:rem UV Defense Me Sun Cream SPF50+/PA++++ là kem chống nắng thuộc thương hiệu Make P:rem đến từ Hàn Quốc. Với chỉ số chống nắng cao SPF50+/PA++++ giúp bảo vệ da trước ánh nắng mặt trời. Kem chống nắng với nhiều dòng phù hợp cho từng loại da khác nhau, cùng thành phần lành tính giúp chăm sóc làn da mềm mịn.',
        details: 'Kem Chống Nắng Nâng Tone, Kiềm Dầu, Dưỡng Ẩm Make P:rem UV Defense Me Sun Cream SPF50+/PA++++ hiện đã có mặt tại Thế Giới Skinfood với 4 loại: Kem Chống Nắng Vật Lý Nâng Tone Hồng Rạng Rỡ Make P:rem UV Defense Me Soothing pink Tone Up Sun Cream SPF50+/PA++++ 50ml (Màu hồng), Kem Chống Nắng Vật Lý Cho Da Nhạy Cảm Make P:rem UV Defense Me Calming Sun Cream SPF50+/PA++++ 50ml (màu trắng nắp xanh dương), Kem Chống Nắng Hóa Học Dưỡng Ẩm, Căng Bóng Da Make P:rem UV Defense Me Watery Capsule Sun Cream SPF50+/PA++++ 50ml (Màu xanh dương), Kem Chống Nắng Vật Lý Kiềm Dầu, Nâng Tone Trắng Sáng Make P:rem UV Defense Me No Sebum Sun Cream SPF50+/PA++++ 50ml (màu xanh lá).',
        specs: {
            'Tên sản phẩm': 'Make P:rem UV Defense Me Sun Cream SPF50+/PA++++',
            'Kết cấu': 'Dạng kem',
            'Dung tích': '50ml',
            'Thương hiệu': 'Make P:rem (Hàn Quốc)',
            'Nơi sản xuất': 'Hàn Quốc',
            'Hạn sử dụng': '36 tháng kể từ ngày sản xuất in trên bao bì'
        },
        sold: 351
    },
    {
        id: 9,
        name: 'Kem Chống Nắng Acnes Hỗ Trợ Giảm Mụn Blemish Control Sunscreen 50g',
        brand: 'Acnes',
        category: 'cham-soc-da',
        price: 148000,
        oldPrice: 158000,
        discount: '6%',
        image: 'https://product.hstatic.net/1000006063/product/vn-11134201-23030-scu1mi2xkpov69_ea5a65254a374a0a89a267fd4eed714f_1024x1024.jpg',
        images: [
            'https://product.hstatic.net/1000006063/product/vn-11134201-23030-scu1mi2xkpov69_ea5a65254a374a0a89a267fd4eed714f_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/3_b43b4db3418c4e519b5435a275ea48eb_1024x1024.jpg',
            'https://product.hstatic.net/1000006063/product/vn-11134201-23030-8zz36v5xkpov52_7af8369aa9ca402b889e86cb79d34974_1024x1024.jpg'
        ],
        description: 'Kem Chống Nắng Acnes Hỗ Trợ Giảm Mụn Blemish Control Sunscreen 50g là dòng kem chống nắng mới đến từ thương hiệu mỹ phẩm Acnes. Có chỉ số chống nắng SPF50+ PA++++ với màng lọc tia cực tím và phản xạ đa chiều giúp bảo vệ da. Cùng với thành phần tràm trà, hoạt chất Terpenoids giúp hỗ trợ giảm mụn và cải thiện tình trạng mụn.',
        details: 'Kem Chống Nắng Acnes Hỗ Trợ Giảm Mụn Blemish Control Sunscreen 50g là dòng kem chống nắng mới đến từ thương hiệu mỹ phẩm Acnes. Có chỉ số chống nắng SPF50+ PA++++ với màng lọc tia cực tím và phản xạ đa chiều giúp bảo vệ da. Cùng với thành phần tràm trà, hoạt chất Terpenoids giúp hỗ trợ giảm mụn và cải thiện tình trạng mụn. Những thành phần Duo Vitamin B3 (Niacinamide) & B5 (Panthenol), Dipotassium Glycyrrhizate hỗ trợ làm dịu vùng da mụn, duy trì độ ẩm, cải thiện tình trạng mụn. Có kết cấu dạng sữa, nhanh thẩm thấu vào da, không gây tình trạng bóng nhờn trên da. Sản phẩm lành tính cho da, không chứa Cồn, Paraben, dầu thoáng, hương liệu.',
        specs: {
            'Tên sản phẩm': 'Acnes Blemish Control Sunscreen',
            'Dung tích': '50g',
            'Thương hiệu': 'Acnes (Nhật Bản)',
            'Nơi sản xuất': 'Việt Nam',
            'Hạn sử dụng': '3 năm kể từ ngày sản xuất',
            'Chỉ số chống nắng': 'SPF50+ PA++++',
            'Đối tượng': 'Da dầu mụn, da nhạy cảm'
        },
        sold: 24
    },
    {
        id: 10,
        name: 'Gel Chống Nắng Anessa Dưỡng Ẩm, Bảo Vệ Da Perfect UV Sunscreen Skincare Gel SPF50+/PA++++ 90g',
        brand: 'Anessa',
        category: 'cham-soc-da',
        price: 488000,
        oldPrice: 575000,
        discount: '15%',
        image: 'https://product.hstatic.net/1000006063/product/8_38fdbb4cd52541b58537b5136a144bea_1024x1024.jpg',
        images: [
            'https://product.hstatic.net/1000006063/product/8_38fdbb4cd52541b58537b5136a144bea_1024x1024.jpg',
            'https://product.hstatic.net/1000006063/product/anessa_perfect_uv_sunscreen_skincare_gel__8278941c81214a26bbd0e44cbb0a002e_1024x1024.jpg',
            'https://product.hstatic.net/1000006063/product/download__2__2ac2e645c84f452ca877838118652902_1024x1024.jpeg'
        ],
        description: 'Gel Chống Nắng Anessa Dưỡng Ẩm, Bảo Vệ Da Perfect UV Sunscreen Skincare Gel SPF50+/PA++++ là gel chống nắng chống trôi, dưỡng da với công nghệ Auto Veil và Aqua Booster giúp bảo vệ da trước các tác động, ngăn mất nước 16h và chống bụi PM2.5.',
        details: 'Gel Chống Nắng Anessa Dưỡng Ẩm, Bảo Vệ Da Perfect UV Sunscreen Skincare Gel SPF50+/PA++++ là gel chống nắng chống trôi, dưỡng da với công nghệ Auto Veil và Aqua Booster giúp bảo vệ da trước các tác động, ngăn mất nước 16h và chống bụi PM2.5. Bao bì giấy thân thiện môi trường, kết cấu gel ẩm mượt, mát mịn, có thể làm sạch với xà phòng.',
        specs: {
            'Tên sản phẩm': 'Anessa Perfect UV Sunscreen Skincare Gel',
            'Dung tích': '90g',
            'Thương hiệu': 'Anessa (Nhật Bản)',
            'Nơi sản xuất': 'Nhật Bản',
            'Hạn sử dụng': '3 năm kể từ ngày sản xuất',
            'Chỉ số chống nắng': 'SPF50+/PA++++',
            'Đối tượng': 'Da thiên khô'
        },
        sold: 517
    },
    {
        id: 11,
        name: 'Miếng Pad Dưỡng Ẩm, Làm Dịu Da Emmié by HappySkin Semi-Gel Mask Pad 120ml (60 miếng)',
        brand: 'Emmié by HappySkin',
        category: 'cham-soc-da',
        price: 315000,
        oldPrice: 450000,
        discount: '30%',
        image: 'https://cdn.hstatic.net/products/1000006063/emmie_copy_28ed3a4f9ae3421db56ff99742a1599f_1024x1024.jpg',
        images: [
            'https://cdn.hstatic.net/products/1000006063/emmie_copy_28ed3a4f9ae3421db56ff99742a1599f_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/8_01e92ca367694f6bb15915fd83145447_1024x1024.jpg',
            'https://cdn.hstatic.net/products/1000006063/1_b1358f2c00ac452bb870597c0352a8a3_1024x1024.jpg'
        ],
        description: 'Toner Pad Emmié by HappySkin Dưỡng Ẩm, Làm Dịu Da, Hỗ Trợ Làm Sáng Da Semi-Gel Mask Pad là miếng pad dưỡng da đa năng giúp cấp ẩm tức thì, làm dịu vùng da nhạy cảm và hỗ trợ làm sáng da hiệu quả. Với kết cấu Semi-gel độc đáo, sản phẩm ôm sát vào da như một miếng mặt nạ, giúp dưỡng chất thẩm thấu sâu hơn.',
        details: 'Toner Pad Emmié by HappySkin Dưỡng Ẩm, Làm Dịu Da, Hỗ Trợ Làm Sáng Da Semi-Gel Mask Pad là miếng pad dưỡng da đa năng giúp cấp ẩm tức thì, làm dịu vùng da nhạy cảm và hỗ trợ làm sáng da hiệu quả. Với kết cấu Semi-gel độc đáo, sản phẩm ôm sát vào da như một miếng mặt nạ, giúp dưỡng chất thẩm thấu sâu hơn. Thành phần chứa phức hợp dưỡng ẩm sâu và các chiết xuất thiên nhiên lành tính, an toàn cho mọi loại da, kể cả da nhạy cảm nhất.',
        specs: {
            'Tên sản phẩm': 'Emmié by HappySkin Semi-Gel Mask Pad',
            'Dung tích': '120ml (60 miếng)',
            'Thương hiệu': 'Emmié by HappySkin (Việt Nam)',
            'Nơi sản xuất': 'Việt Nam',
            'Hạn sử dụng': '36 tháng kể từ ngày sản xuất',
            'Thành phần chính': 'Hyaluronic Acid, Panthenol, Niacinamide',
            'Đối tượng': 'Mọi loại da'
        },
        sold: 850
    }
];

let reviews = JSON.parse(localStorage.getItem('qh_reviews')) || {};

const magazinePosts = [
    {
        id: 1,
        title: "Bí quyết trang điểm tự nhiên như không cho nàng công sở",
        category: "makeup-tips",
        categoryName: "Bí quyết trang điểm",
        date: "06/04/2026",
        description: "Làm thế nào để có một lớp nền mỏng nhẹ, tự nhiên nhưng vẫn che được khuyết điểm? Hãy cùng khám phá các bước trang điểm đơn giản nhất.",
        thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        content: "Nội dung chi tiết về bí quyết trang điểm tự nhiên... <br><br> Bước 1: Làm sạch da... <br> Bước 2: Kem lót... <br> Bước 3: Phấn nước mỏng nhẹ..."
    },
    {
        id: 2,
        title: "Quy trình chăm sóc da chuyên sâu cho da dầu mụn",
        category: "skincare-tips",
        categoryName: "Chăm sóc da chuyên sâu",
        date: "05/04/2026",
        description: "Da dầu mụn cần một chế độ chăm sóc đặc biệt để kiểm soát dầu thừa và ngăn ngừa vi khuẩn gây mụn phát triển.",
        thumbnail: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
        content: "Nội dung chi tiết về chăm sóc da dầu mụn... <br><br> Sử dụng sữa rửa mặt chứa Salicylic Acid... <br> Toner không cồn... <br> Serum trị mụn..."
    },
    {
        id: 3,
        title: "Review chi tiết bộ sản phẩm dưỡng trắng da Laneige",
        category: "review",
        categoryName: "Review mỹ phẩm",
        date: "04/04/2026",
        description: "Cùng xem thử bộ sản phẩm dưỡng trắng đình đám của Laneige có thực sự hiệu quả như lời đồn hay không nhé.",
        thumbnail: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
        content: "Đánh giá chi tiết về Laneige Radian-C... <br><br> Ưu điểm: Thấm nhanh, mùi thơm nhẹ... <br> Nhược điểm: Giá hơi cao..."
    },
    {
        id: 4,
        title: "Top 5 kem chống nắng được yêu thích nhất mùa hè 2026",
        category: "top-products",
        categoryName: "Top mỹ phẩm",
        date: "03/04/2026",
        description: "Mùa hè nắng gắt, việc chọn một loại kem chống nắng phù hợp là vô cùng quan trọng để bảo vệ làn da của bạn.",
        thumbnail: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
        content: "Danh sách 5 kem chống nắng tốt nhất... <br><br> 1. La Roche-Posay Anthelios... <br> 2. Anessa Perfect UV..."
    }
];

// 2. STATE
let cart = JSON.parse(localStorage.getItem('qh_cart')) || [];
let filteredProducts = [...products];
let currentSlide = 0;
let currentCheckoutItems = [];
let isDirectCheckout = false;

function parseOrderTotal(total) {
    if (typeof total === 'number') return total;
    if (typeof total === 'string') {
        return Number(total.replace(/[^0-9.-]+/g, '')) || 0;
    }
    return 0;
}

// Initialize demo data if localStorage is empty
function initializeDemoData() {
    // Only initialize if no data exists
    if (!localStorage.getItem('qh_users')) {
        const demoUsers = [
            { id: 1712000000000, name: 'Nguyễn Thị Hương', email: 'huong@example.com', password: '123456' },
            { id: 1712000010000, name: 'Trần Văn Hùng', email: 'hung@example.com', password: 'password123' },
            { id: 1712000020000, name: 'Phạm Thị Linh', email: 'linh@example.com', password: 'test1234' }
        ];
        localStorage.setItem('qh_users', JSON.stringify(demoUsers));
        registeredUsers = demoUsers;
    }

    if (!localStorage.getItem('qh_orders')) {
        const demoOrders = [
            {
                id: 'ORD001',
                customer: 'Nguyễn Thị Hương',
                email: 'huong@example.com',
                phone: '0912345678',
                address: '123 Đường Nguyễn Huệ, HCM',
                items: [
                    { id: 1, name: 'Water Bank Blue Hyaluronic Cream', qty: 1, price: 850000, image: products[0].image },
                    { id: 2, name: 'Green Tea Seed Hyaluronic Serum', qty: 1, price: 590000, image: products[1].image }
                ],
                total: 1440000,
                date: '10/04/2026',
                paymentMethod: 'COD',
                status: 'Đã giao'
            },
            {
                id: 'ORD002',
                customer: 'Trần Văn Hùng',
                email: 'hung@example.com',
                phone: '0987654321',
                address: '456 Đường Lê Lợi, HCM',
                items: [
                    { id: 3, name: 'Juicy Lasting Tint - Bare Grape', qty: 2, price: 169000, image: products[2].image }
                ],
                total: 338000,
                date: '12/04/2026',
                paymentMethod: 'Thẻ tín dụng',
                status: 'Chờ xử lý'
            },
            {
                id: 'ORD003',
                customer: 'Phạm Thị Linh',
                email: 'linh@example.com',
                phone: '0923456789',
                address: '789 Đường Pasteur, HCM',
                items: [
                    { id: 1, name: 'Water Bank Blue Hyaluronic Cream', qty: 1, price: 850000, image: products[0].image }
                ],
                total: 850000,
                date: '14/04/2026',
                paymentMethod: 'COD',
                status: 'Chờ xử lý'
            }
        ];
        localStorage.setItem('qh_orders', JSON.stringify(demoOrders));
    }
}

function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

// 3. INIT
document.addEventListener('DOMContentLoaded', () => {
    // Đồng bộ sản phẩm mới từ code vào LocalStorage
    let localProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    let isUpdated = false;

    products.forEach(p => {
        const index = localProducts.findIndex(lp => lp.id === p.id);
        if (index === -1) {
            localProducts.push(p); // Thêm mới nếu chưa có ID
            isUpdated = true;
        } else if (localProducts[index].image !== p.image || localProducts[index].images.length !== p.images.length) {
            localProducts[index] = p; // Ghi đè nếu dữ liệu trong code khác với trình duyệt
            isUpdated = true;
        }
    });

    if (isUpdated) {
        localStorage.setItem('qh_products', JSON.stringify(localProducts));
    }

    initializeDemoData();
    renderProducts();
    renderFlashSale();
    renderMerzyProducts();
    renderMakeupProducts();
    renderSunCareProducts();
    renderMaskProducts();
    renderLocalBrandProducts();
    renderSkinCareSectionProducts();
    renderBodyCareProducts();
    renderHairCareProducts();
    renderMakeupSectionProducts();
    updateCartUI();
    startSlider();
    startCountdown();
    initEvents();
    
    // Check if already logged in
    if (isLoggedIn && currentUserEmail) {
        const users = JSON.parse(localStorage.getItem('qh_users') || '[]');
        const user = users.find(u => u.email === currentUserEmail) || (currentUserEmail === 'admin@qhskinlab.com' ? {name: 'admin', email: 'admin@qhskinlab.com'} : null);
        if (user) updateUserDisplay(user);
    }
    
    // Category Page Logic
    if (window.location.pathname.includes('category.html')) {
        handleCategoryPage();
    }
    
    // Magazine Page Logic
    if (window.location.pathname.includes('magazine.html')) {
        handleMagazinePage();
    }

    // Magazine Detail Logic
    if (window.location.pathname.includes('magazine-detail.html')) {
        handleMagazineDetailPage();
    }
});

// 3.1 CATEGORY PAGE LOGIC
function handleCategoryPage() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'all';
    const q = params.get('q') || '';
    const brandParam = params.get('brand') || '';
    
    const ITEMS_PER_PAGE = 12;
    let currentPage = 1;

    const categoryMap = {
        'trang-diem': { title: 'TRANG ĐIỂM', banner: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80' },
        'skincare': { title: 'CHĂM SÓC DA', banner: 'https://images.unsplash.com/photo-1570172619384-210fa1de8bd8?auto=format&fit=crop&w=1200&q=80' },
        'bodycare': { title: 'CHĂM SÓC CƠ THỂ', banner: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80' },
        'haircare': { title: 'CHĂM SÓC TÓC', banner: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80' },
        'perfume': { title: 'NƯỚC HOA', banner: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80' },
        'brands': { title: 'THƯƠNG HIỆU', banner: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&w=1200&q=80' },
        'magazine': { title: 'TẠP CHÍ LÀM ĐẸP', banner: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80' },
        'new': { title: 'SẢN PHẨM MỚI', banner: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&w=1200&q=80' },
        'combo': { title: 'COMBO CHĂM DA', banner: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80' }
    };

    let config = categoryMap[type] || { title: 'TẤT CẢ SẢN PHẨM', banner: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&w=1200&q=80' };

    if (q) {
        config = { title: `KẾT QUẢ TÌM KIẾM: "${q}"`, banner: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&w=1200&q=80' };
    } else if (brandParam) {
        config = { title: `THƯƠNG HIỆU: ${brandParam.toUpperCase()}`, banner: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&w=1200&q=80' };
    }

    // Update UI
    const titleEl = document.getElementById('categoryTitle');
    const bannerEl = document.getElementById('categoryBanner');
    const breadcrumbEl = document.getElementById('breadcrumbCategory');
    const breadcrumbContainer = document.querySelector('.breadcrumb');
    const gridEl = document.getElementById('categoryProductGrid');
    const countEl = document.getElementById('productCount');

    if (titleEl) titleEl.innerText = config.title;
    if (bannerEl) bannerEl.style.backgroundImage = `url('${config.banner}')`;
    if (breadcrumbEl) breadcrumbEl.innerText = config.title;

    const sidebarEl = document.querySelector('.category-sidebar');
    const layoutEl = document.querySelector('.category-layout');

    // Hide breadcrumbs and banner if searching
    if (q) {
        if (breadcrumbContainer) breadcrumbContainer.style.display = 'none';
        if (bannerEl) bannerEl.style.display = 'none';
        if (sidebarEl) sidebarEl.style.display = 'none';
        if (layoutEl) layoutEl.style.gridTemplateColumns = '1fr';
        if (gridEl) gridEl.style.gridTemplateColumns = 'repeat(5, 1fr)';
    } else {
        if (breadcrumbContainer) breadcrumbContainer.style.display = 'block';
        if (bannerEl) bannerEl.style.display = 'flex';
        if (sidebarEl) sidebarEl.style.display = 'block';
        if (layoutEl) layoutEl.style.gridTemplateColumns = '280px 1fr';
        if (gridEl) gridEl.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput && q) {
        searchInput.value = q;
    }

    // Filter Products (Base list for sidebar to work on)
    let filtered = products;
    if (q) {
        const query = q.toLowerCase().trim();
        const queryNoAccent = removeAccents(query);
        filtered = products.filter(p => {
            const name = p.name.toLowerCase();
            const brand = p.brand.toLowerCase();
            const category = p.category.toLowerCase();
            const details = (p.details || "").toLowerCase();
            
            if (name.includes(query) || brand.includes(query) || category.includes(query) || details.includes(query)) return true;
            if (removeAccents(name).includes(queryNoAccent) || removeAccents(brand).includes(queryNoAccent) || removeAccents(category).includes(queryNoAccent) || removeAccents(details).includes(queryNoAccent)) return true;
            return false;
        });
    } else if (type === 'new') {
        filtered = products.filter(p => p.isNew);
    } else if (type === 'combo') {
        filtered = products.filter(p => p.category === 'combo');
    } else if (type !== 'all' && type !== 'brands' && type !== 'magazine') {
        filtered = products.filter(p => p.category === type || p.category.startsWith(type + '-'));
    }

    // Initial render
    if (gridEl) {
        gridEl.innerHTML = filtered.map(p => createProductCard(p)).join('');
    }
    if (countEl) countEl.innerText = filtered.length;

    // SIDEBAR FILTER LOGIC
    const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
    const priceCheckboxes = document.querySelectorAll('.price-checkbox');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const applyPriceBtn = document.getElementById('applyPriceBtn');

    // Sync brandParam with checkboxes
    if (brandParam) {
        brandCheckboxes.forEach(cb => {
            if (cb.value.toLowerCase() === brandParam.toLowerCase()) {
                cb.checked = true;
            }
        });
    }

    function applySidebarFilters() {
        const selectedBrands = Array.from(brandCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value.toLowerCase());
        
        const selectedPriceRanges = Array.from(priceCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value.split('-').map(Number));

        const minPrice = parseInt(minPriceInput.value) || 0;
        const maxPrice = parseInt(maxPriceInput.value) || 999999999;

        let sidebarFiltered = filtered;

        // Filter by Brand
        if (selectedBrands.length > 0) {
            sidebarFiltered = sidebarFiltered.filter(p => {
                if (!p.brand) return false;
                // Logic OR: Kiểm tra xem thương hiệu của sản phẩm có khớp với BẤT KỲ lựa chọn nào không
                return selectedBrands.some(brand => p.brand.toLowerCase().trim() === brand.trim());
            });
        }

        // Filter by Price Range (Checkboxes)
        if (selectedPriceRanges.length > 0) {
            sidebarFiltered = sidebarFiltered.filter(p => {
                return selectedPriceRanges.some(range => p.price >= range[0] && p.price <= range[1]);
            });
        }

        // Filter by Custom Price Range (Inputs) - only if inputs are used
        if (minPriceInput.value || maxPriceInput.value) {
            sidebarFiltered = sidebarFiltered.filter(p => p.price >= minPrice && p.price <= maxPrice);
        }

        // Apply Sorting
        const sortValue = sortSelect ? sortSelect.value : 'default';
        let sortedItems = [...sidebarFiltered];
        if (sortValue === 'price-asc') sortedItems.sort((a, b) => a.price - b.price);
        else if (sortValue === 'price-desc') sortedItems.sort((a, b) => b.price - a.price);
        else if (sortValue === 'name-asc') sortedItems.sort((a, b) => a.name.localeCompare(b.name));

        const totalItems = sortedItems.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const pagedItems = sortedItems.slice(start, start + ITEMS_PER_PAGE);

        if (gridEl) {
            gridEl.innerHTML = pagedItems.map(p => createProductCard(p)).join('');
        }
        if (countEl) countEl.innerText = totalItems;

        renderPagination(totalItems);
    }

    brandCheckboxes.forEach(cb => cb.addEventListener('change', () => { currentPage = 1; applySidebarFilters(); }));
    priceCheckboxes.forEach(cb => cb.addEventListener('change', () => { currentPage = 1; applySidebarFilters(); }));
    if (sortSelect) sortSelect.addEventListener('change', () => { currentPage = 1; applySidebarFilters(); });
    
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', () => { currentPage = 1; applySidebarFilters(); });
    }

    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            brandCheckboxes.forEach(cb => cb.checked = false);
            priceCheckboxes.forEach(cb => cb.checked = false);
            minPriceInput.value = '';
            maxPriceInput.value = '';
            applySidebarFilters();
        });
    }

    // Apply filters initially (in case brandParam is present)
    applySidebarFilters();
}

// 3.2 MAGAZINE PAGE LOGIC
function handleMagazinePage() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic') || 'all';
    
    renderMagazinePosts(topic);
    
    // Sidebar active state
    const sidebarItems = document.querySelectorAll('.mag-sidebar-item');
    sidebarItems.forEach(item => {
        if (item.dataset.topic === topic) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
        
        item.addEventListener('click', () => {
            const newTopic = item.dataset.topic;
            window.history.pushState({}, '', `magazine.html?topic=${newTopic}`);
            
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            renderMagazinePosts(newTopic);
        });
    });
}

function renderMagazinePosts(topic) {
    const grid = document.getElementById('magazineGrid');
    const titleEl = document.getElementById('magazineTitle');
    const breadcrumbEl = document.getElementById('breadcrumbTopic');
    
    if (!grid) return;
    
    let filtered = magazinePosts;
    let title = "TẤT CẢ BÀI VIẾT";
    
    if (topic !== 'all') {
        filtered = magazinePosts.filter(p => p.category === topic);
        if (filtered.length > 0) {
            title = filtered[0].categoryName.toUpperCase();
        }
    }
    
    if (titleEl) titleEl.innerText = title;
    if (breadcrumbEl) breadcrumbEl.innerText = topic === 'all' ? 'Tất cả' : title;
    
    grid.innerHTML = filtered.map(post => `
        <div class="magazine-card" onclick="location.href='magazine-detail.html?id=${post.id}'">
            <div class="mag-card-img">
                <img src="${post.thumbnail}" alt="${post.title}" referrerPolicy="no-referrer">
            </div>
            <div class="mag-card-body">
                <div class="mag-card-date">${post.date}</div>
                <h3 class="mag-card-title">${post.title}</h3>
                <p class="mag-card-desc">${post.description}</p>
                <span class="mag-card-more">Xem chi tiết &rarr;</span>
            </div>
        </div>
    `).join('');
}

function handleMagazineDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const post = magazinePosts.find(p => p.id === id);
    
    if (!post) {
        document.getElementById('magazineDetailContent').innerHTML = "<h3>Không tìm thấy bài viết</h3>";
        return;
    }
    
    document.getElementById('magDetailTitle').innerText = post.title;
    document.getElementById('magDetailDate').innerText = post.date;
    document.getElementById('magDetailCategory').innerText = post.categoryName;
    document.getElementById('magDetailThumbnail').src = post.thumbnail;
    document.getElementById('magDetailBody').innerHTML = post.content;
    document.getElementById('breadcrumbPostTitle').innerText = post.title;
}

// 4. RENDER
function renderProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = currentProducts.map(p => createProductCard(p)).join('');
}

function renderFlashSale() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('flashSaleGrid');
    if (!grid) return;

    // Show products with high discount for flash sale
    const flashSaleItems = currentProducts.filter(p => parseInt(p.discount) > 30).slice(0, 5);
    grid.innerHTML = flashSaleItems.map(p => createProductCard(p, true)).join('');
}

function renderMerzyProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('merzyProductsGrid');
    if (!grid) return;

    const merzyItems = currentProducts.filter(p => p.brand === 'Merzy').slice(0, 8);
    grid.innerHTML = merzyItems.map(p => createProductCard(p)).join('');
}

function renderMakeupProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('makeupGrid');
    const countEl = document.getElementById('makeupCount');
    if (!grid) return;

    const allItems = currentProducts.filter(p => p.category && p.category.startsWith('trang-diem'));
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderSunCareProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('sunCareGrid');
    const countEl = document.getElementById('sunCareCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => p.name.toLowerCase().includes('sun') || p.name.toLowerCase().includes('chống nắng'));
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderMaskProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('maskGrid');
    const countEl = document.getElementById('maskCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => p.name.toLowerCase().includes('mask') || p.name.toLowerCase().includes('mặt nạ'));
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderLocalBrandProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('localBrandGrid');
    const countEl = document.getElementById('localBrandCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => ['Lemonade', 'Cocoon'].includes(p.brand));
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderSkinCareSectionProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('skinCareSectionGrid');
    const countEl = document.getElementById('skinCareSectionCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => p.category === 'skincare' || p.category.startsWith('skincare-') || p.category === 'cham-soc-da');
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderBodyCareProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('bodyCareGrid');
    const countEl = document.getElementById('bodyCareCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => p.category === 'bodycare' || p.category === 'cham-soc-co-the');
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderHairCareProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('hairCareGrid');
    const countEl = document.getElementById('hairCareCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => p.category === 'haircare' || p.category === 'cham-soc-toc');
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function renderMakeupSectionProducts() {
    const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    const grid = document.getElementById('makeupSectionGrid');
    const countEl = document.getElementById('makeupSectionCount');
    if (!grid) return;
    
    const allItems = currentProducts.filter(p => p.category && p.category.startsWith('trang-diem'));
    if (countEl) countEl.innerText = allItems.length;
    grid.innerHTML = allItems.slice(0, 5).map(p => createProductCard(p)).join('');
}

function createProductCard(p, isFlashSale = false) {
    const progress = Math.min(100, Math.floor((p.sold / 1000) * 100));
    const isWishlisted = wishlist.includes(p.id);

    return `
        <div class="product-card" onclick="goToDetail(${p.id})">
            ${isFlashSale ? `<div class="badge-discount">-${p.discount}</div>` : ''}
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" referrerPolicy="no-referrer">
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${p.id})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </button>
            </div>
            <p class="product-brand">${p.brand}</p>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-price-wrap">
                <span class="price-current">${p.price.toLocaleString()}đ</span>
                ${isFlashSale ? `<span class="price-old">${p.oldPrice.toLocaleString()}đ</span>` : ''}
            </div>
            ${isFlashSale ? `
                <div class="flash-progress">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                    <div class="progress-text">Đã bán ${p.sold}</div>
                </div>
            ` : ''}
        </div>
    `;
}

window.goToDetail = function(id) {
    const p = products.find(item => item.id === id);
    if (p) {
        localStorage.setItem('selectedProductId', p.id);
        localStorage.setItem('selectedProductName', p.name);
        localStorage.setItem('selectedProductImage', p.image);
        window.location.href = 'product-detail.html';
    }
};

// 5. CART LOGIC
window.addToCart = function(id, quantity) {
    // If quantity is not provided, check for qtyInput (for product detail page)
    if (quantity === undefined) {
        const qtyInput = document.getElementById('qtyInput');
        quantity = qtyInput ? parseInt(qtyInput.value) : 1;
    }

    const allProds = JSON.parse(localStorage.getItem('qh_products')) || products;
    const product = allProds.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }

    saveCart();
    updateCartUI();
    showToast(`Đã thêm ${product.name} vào giỏ hàng!`);
    openCart();
};

window.buyNow = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const qtyInput = document.getElementById('qtyInput');
    const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

    const directItems = [{ ...product, quantity }];
    localStorage.setItem('qh_checkoutMode', 'direct');
    localStorage.setItem('qh_directCheckoutItems', JSON.stringify(directItems));
    window.location.href = 'checkout.html';
};

window.changeCartQuantity = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        updateCartUI();
    }
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('qh_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const itemsList = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');

    const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);
    if (badge) badge.innerText = totalQty;

    if (itemsList) {
        itemsList.innerHTML = cart.map(item => `
            <div class="cart-item" style="display:flex; gap:15px; margin-bottom:20px; border-bottom:1px solid var(--border); padding-bottom:15px;">
                <img src="${item.image}" style="width:60px; height:60px; object-fit:contain; border-radius:4px;">
                <div style="flex:1;">
                    <p style="font-size:13px; font-weight:600; margin-bottom:5px;">${item.name}</p>
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:5px;">
                        <button onclick="changeCartQuantity(${item.id}, -1)" style="width:20px; border:1px solid #ddd; background:#fff; cursor:pointer;">-</button>
                        <span style="font-size:12px; font-weight:700;">${item.quantity}</span>
                        <button onclick="changeCartQuantity(${item.id}, 1)" style="width:20px; border:1px solid #ddd; background:#fff; cursor:pointer;">+</button>
                    </div>
                    <p style="font-size:12px; color:var(--red); font-weight:800;">${(item.price * item.quantity).toLocaleString()}đ</p>
                    <span style="font-size:11px; color:#999; cursor:pointer; text-decoration:underline;" onclick="removeFromCart(${item.id})">Xóa</span>
                </div>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    if (totalEl) totalEl.innerText = total.toLocaleString() + 'đ';
}

// 6. SLIDER
function startSlider() {
    const slides = document.querySelectorAll('.slide-item');
    if (slides.length === 0) return;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);
}

// 7. COUNTDOWN
function startCountdown() {
    const target = new Date().getTime() + (3 * 60 * 60 * 1000); // 3h from now
    
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;

        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('mins');
        const sEl = document.getElementById('secs');

        if (hEl) hEl.innerText = h.toString().padStart(2, '0');
        if (mEl) mEl.innerText = m.toString().padStart(2, '0');
        if (sEl) sEl.innerText = s.toString().padStart(2, '0');
    }, 1000);
}

// 8. EVENTS
function initEvents() {
    // Sticky Header Logic
    const stickyHeader = document.getElementById('stickyHeader');
    if (stickyHeader) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                // Scrolling down (Swiping up) -> Hide
                stickyHeader.classList.add('header-hidden');
                stickyHeader.classList.remove('header-visible');
            } else {
                // Scrolling up (Pulling down) -> Show
                stickyHeader.classList.remove('header-hidden');
                stickyHeader.classList.add('header-visible');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchResults) {
        const performSearch = () => {
            const q = searchInput.value.trim();
            if (q) {
                if (searchResults) searchResults.style.display = 'none';
                
                if (window.location.pathname.includes('category.html')) {
                    // Cập nhật URL mà không load lại trang
                    const newUrl = `category.html?q=${encodeURIComponent(q)}`;
                    window.history.pushState({ path: newUrl }, '', newUrl);
                    // Gọi hàm xử lý danh mục để cập nhật giao diện ngay lập tức
                    handleCategoryPage();
                } else {
                    window.location.href = `category.html?q=${encodeURIComponent(q)}`;
                }
            }
        };

        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                const q = searchInput.value.trim();
                if (!q) {
                    searchInput.focus();
                    searchInput.dispatchEvent(new Event('input'));
                } else {
                    performSearch();
                }
            });
        }

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            const qNoAccent = removeAccents(q);
            
            if (q.length < 1) {
                searchResults.style.display = 'none';
                return;
            }

            const matches = products.filter(p => {
                const name = p.name.toLowerCase();
                const nameNoAccent = removeAccents(name);
                const brand = p.brand.toLowerCase();
                const brandNoAccent = removeAccents(brand);
                const category = p.category.toLowerCase();
                const categoryNoAccent = removeAccents(category);
                const details = (p.details || "").toLowerCase();
                const detailsNoAccent = removeAccents(details);
                
                // Check with accents
                if (name.includes(q) || brand.includes(q) || category.includes(q) || details.includes(q)) return true;
                
                // Check without accents
                if (nameNoAccent.includes(qNoAccent) || brandNoAccent.includes(qNoAccent) || categoryNoAccent.includes(qNoAccent) || detailsNoAccent.includes(qNoAccent)) return true;

                return false;
            }).slice(0, 10);

            if (matches.length > 0) {
                searchResults.innerHTML = matches.map(p => `
                    <div class="search-result-item" onclick="goToDetail(${p.id})">
                        <img src="${p.image}" alt="${p.name}" referrerPolicy="no-referrer">
                        <div class="search-result-info">
                            <div class="search-result-name">${p.name}</div>
                            <div class="search-result-price">${p.price.toLocaleString()}đ</div>
                        </div>
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div style="padding: 15px; font-size: 13px; color: #999; text-align: center;">Không tìm thấy sản phẩm</div>';
                searchResults.style.display = 'block';
            }
        });

        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    // Cart Drawer
    const cartTrigger = document.getElementById('cartTrigger');
    const closeCartBtn = document.getElementById('closeCart');
    if (cartTrigger) cartTrigger.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

    // Login Modal
    const accountTrigger = document.getElementById('accountTrigger');
    const loginModal = document.getElementById('loginModalOverlay');
    const closeLogin = document.getElementById('closeLogin');
    const cartDrawer = document.getElementById('cartDrawer');

    const loginView = document.getElementById('loginView');
    const registerView = document.getElementById('registerView');
    const forgotPasswordView = document.getElementById('forgotPasswordView');
    const forgotPassTrigger = document.getElementById('forgotPassTrigger');
    const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
    const forgotPassForm = document.getElementById('forgotPassForm');
    const toRegister = document.getElementById('toRegister');
    const toLogin = document.getElementById('toLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (accountTrigger) {
        accountTrigger.addEventListener('click', () => {
            if (isLoggedIn) {
                const profileOverlay = document.getElementById('profileOverlay');
                if (profileOverlay) {
                    profileOverlay.style.display = 'flex';
                    profileOverlay.classList.add('active');
                    // Reset to first tab
                    if (window.switchProfileTab) window.switchProfileTab('info');
                }
            } else {
                if (loginModal) {
                    // Reset to login view when opening
                    if (loginView) loginView.style.display = 'block';
                    if (registerView) registerView.style.display = 'none';
                    if (forgotPasswordView) forgotPasswordView.style.display = 'none';
                    loginModal.classList.add('active');
                }
            }
        });
    }

    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
            }
        });
    }

    if (closeLogin) {
        closeLogin.addEventListener('click', () => {
            if (loginModal) loginModal.classList.remove('active');
        });
    }

    if (toRegister) {
        toRegister.addEventListener('click', () => {
            if (loginView) loginView.style.display = 'none';
            if (registerView) registerView.style.display = 'block';
            if (forgotPasswordView) forgotPasswordView.style.display = 'none';
        });
    }

    if (toLogin) {
        toLogin.addEventListener('click', () => {
            if (loginView) loginView.style.display = 'block';
            if (registerView) registerView.style.display = 'none';
            if (forgotPasswordView) forgotPasswordView.style.display = 'none';
        });
    }

    if (forgotPassTrigger) {
        forgotPassTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginView) loginView.style.display = 'none';
            if (registerView) registerView.style.display = 'none';
            if (forgotPasswordView) forgotPasswordView.style.display = 'block';
        });
    }

    if (backToLoginFromForgot) {
        backToLoginFromForgot.addEventListener('click', () => {
            if (loginView) loginView.style.display = 'block';
            if (registerView) registerView.style.display = 'none';
            if (forgotPasswordView) forgotPasswordView.style.display = 'none';
        });
    }

    if (forgotPassForm) {
        forgotPassForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('forgotEmail');
            const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
            const users = JSON.parse(localStorage.getItem('qh_users') || '[]');
            const userIndex = users.findIndex(u => u.email.toLowerCase() === email);

            if (userIndex !== -1) {
                const newPass = Math.random().toString(36).slice(-6); 
                users[userIndex].password = newPass;
                localStorage.setItem('qh_users', JSON.stringify(users));
                showToast(`Mật khẩu mới của bạn là: ${newPass}`);
                
                if (loginView) loginView.style.display = 'block';
                if (forgotPasswordView) forgotPasswordView.style.display = 'none';
                forgotPassForm.reset();
            } else {
                showToast('Email không tồn tại trong hệ thống');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = loginForm.querySelector('input[type="text"]');
            const passInput = loginForm.querySelector('input[type="password"]');
            
            const user = userInput.value.trim();
            const pass = passInput ? passInput.value : '';

            // ADMIN LOGIN CHECK
            const adminPass = localStorage.getItem('adminPass') || '123456';
            if (user === 'admin' && pass === adminPass) {
                sessionStorage.setItem('adminLoggedIn', 'true');
                updateUserDisplay({ name: 'admin', email: 'admin@qhskinlab.com' });
                showToast('Chào mừng Admin trở lại!');
                if (loginModal) {
                    loginModal.classList.remove('active');
                    setTimeout(() => loginModal.style.display = 'none', 300);
                }
                // Chuyển hướng nếu đang ở trang login.html
                if (window.location.pathname.includes('login.html')) {
                    setTimeout(() => window.location.href = 'index.html', 1000);
                }
                return;
            }

            const users = JSON.parse(localStorage.getItem('qh_users') || '[]');
            const isEmail = user.includes('@');
            const matchedUser = users.find(u => isEmail ? u.email.toLowerCase() === user.toLowerCase() : u.name.toLowerCase() === user.toLowerCase());

            if (matchedUser) {
                if (matchedUser.password === pass) {
                    updateUserDisplay(matchedUser);
                    showToast('Chào mừng bạn đã trở lại với Q&H SKINLAB!');
                    if (loginModal) loginModal.classList.remove('active');
                    // Chuyển hướng nếu đang ở trang login.html
                    if (window.location.pathname.includes('login.html')) {
                        setTimeout(() => window.location.href = 'index.html', 1000);
                    }
                } else {
                    showToast('Email hoặc mật khẩu không đúng');
                }
                return;
            }

            if (users.length > 0) {
                showToast('Tài khoản không tồn tại');
                return;
            }

            const name = matchedUser ? matchedUser.name : (user.split('@')[0] || user);
            const email = matchedUser ? matchedUser.email : user;
            updateUserDisplay({ name, email });
            showToast('Chào mừng bạn đã trở lại với Q&H SKINLAB!');
            if (loginModal) loginModal.classList.remove('active');
            // Chuyển hướng nếu đang ở trang login.html
            if (window.location.pathname.includes('login.html')) {
                setTimeout(() => window.location.href = 'index.html', 1000);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = registerForm.querySelector('input[type="text"]');
            const emailInput = registerForm.querySelector('input[type="email"]');
            const passwordInputs = registerForm.querySelectorAll('input[type="password"]');
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
            const password = passwordInputs[0] ? passwordInputs[0].value : '';
            const confirmPassword = passwordInputs[1] ? passwordInputs[1].value : '';

            if (!name || !email || !password) {
                showToast('Vui lòng điền đầy đủ thông tin đăng ký');
                return;
            }

            // 2. Kiểm tra định dạng Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showToast('Email không đúng định dạng');
                return;
            }

            // 3. Kiểm tra độ dài mật khẩu (ít nhất 3 ký tự)
            if (password.length < 3) {
                showToast('Mật khẩu phải dài ít nhất 3 ký tự');
                return;
            }

            // 4. Kiểm tra mật khẩu xác nhận
            if (password !== confirmPassword) {
                showToast('Mật khẩu xác nhận không khớp');
                return;
            }

            // 5. Kiểm tra email đã tồn tại trong localStorage chưa
            const users = JSON.parse(localStorage.getItem('qh_users') || '[]');
            const exists = users.some(u => u.email === email);
            if (exists) {
                showToast('Email này đã được đăng ký, vui lòng sử dụng email khác');
                return;
            }

            const newUser = { id: Date.now(), name, email, password };
            users.push(newUser);
            localStorage.setItem('qh_users', JSON.stringify(users));
            registeredUsers = users;
            updateUserDisplay(newUser);
            showToast('Đăng ký thành công!');
            if (loginModal) loginModal.classList.remove('active');
            registerForm.reset();
            // Chuyển hướng nếu đang ở trang login.html
            if (window.location.pathname.includes('login.html')) {
                setTimeout(() => window.location.href = 'index.html', 1000);
            }
        });
    }

    // PROFILE TAB LOGIC
    window.switchProfileTab = function(tabId) {
        // Update menu items
        const menuItems = document.querySelectorAll('.profile-menu-item');
        menuItems.forEach(item => {
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update tab panes
        const panes = document.querySelectorAll('.profile-tab-pane');
        panes.forEach(pane => {
            if (pane.id === 'tab-' + tabId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        // Special logic for orders
        if (tabId === 'orders') {
            renderProfileOrders();
        }
        if (tabId === 'favorites') {
            renderFavorites();
        }
        if (tabId === 'viewed') {
            renderRecentlyViewed();
        }
    };

    window.updateProfile = function(e) {
        e.preventDefault();
        const name = document.getElementById('editInfoName').value.trim();
        const phone = document.getElementById('editInfoPhone').value.trim();
        const address = document.getElementById('editInfoAddress').value.trim();

        if (!name) {
            showToast('Tên không được để trống');
            return;
        }

        // Cập nhật trong mảng users
        let users = JSON.parse(localStorage.getItem('qh_users') || '[]');
        const userIndex = users.findIndex(u => u.email === currentUserEmail);
        
        if (userIndex !== -1) {
            users[userIndex].name = name;
            users[userIndex].phone = phone;
            users[userIndex].address = address;
            localStorage.setItem('qh_users', JSON.stringify(users));
            updateUserDisplay(users[userIndex]);
            showToast('Cập nhật thông tin thành công!');
        }
    };

    function renderFavorites() {
        const container = document.getElementById('tab-favorites');
        if (!container) return;
        
        const contentDiv = container.querySelector('div:last-child') || container;
        const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
        const favProducts = currentProducts.filter(p => wishlist.includes(p.id));

        if (favProducts.length === 0) {
            contentDiv.innerHTML = '<div style="color: #888; text-align: center; padding: 40px 0;">Bạn chưa yêu thích sản phẩm nào.</div>';
            return;
        }

        contentDiv.innerHTML = `
            <div class="products-grid" style="grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
                ${favProducts.map(p => createProductCard(p)).join('')}
            </div>
        `;
    }

    function renderRecentlyViewed() {
        const container = document.getElementById('tab-viewed');
        if (!container) return;
        
        const contentDiv = container.querySelector('div:last-child') || container;
        const viewedIds = JSON.parse(localStorage.getItem('qh_recentlyViewed')) || [];
        const currentProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
        
        const viewedProducts = viewedIds.map(id => currentProducts.find(p => p.id === id)).filter(p => p);

        if (viewedProducts.length === 0) {
            contentDiv.innerHTML = '<div style="color: #888; text-align: center; padding: 40px 0;">Bạn chưa xem sản phẩm nào.</div>';
            return;
        }

        contentDiv.innerHTML = `
            <div class="products-grid" style="grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
                ${viewedProducts.map(p => createProductCard(p)).join('')}
            </div>
        `;
    }

    window.logoutUser = function() {
        isLoggedIn = false;
        currentUserName = '';
        currentUserEmail = '';
        localStorage.removeItem('qh_isLoggedIn');
        localStorage.removeItem('qh_userName');
        localStorage.removeItem('qh_userEmail');
        sessionStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('qh_lastCheckout'); // Xóa thông tin điền sẵn của người cũ
        
        const display = document.getElementById('userNameDisplay');
        const adminBtn = document.getElementById('adminPanelBtn');
        const profileOverlay = document.getElementById('profileOverlay');
        
        if (display) display.style.display = 'none';
        if (adminBtn) adminBtn.style.display = 'none';
        if (profileOverlay) {
            profileOverlay.classList.remove('active');
            profileOverlay.style.display = 'none';
        }
        
        showToast('Đã đăng xuất thành công');
        location.reload(); // Reload to reset state
    };

    window.switchOrderTab = function(el, status) {
        document.querySelectorAll('.order-tab').forEach(tab => tab.classList.remove('active'));
        el.classList.add('active');
        renderProfileOrders(status);
    };

    function renderProfileOrders(statusFilter = 'Chờ xác nhận') {
        const ordersList = document.getElementById('profileOrdersList');
        if (!ordersList) return;

        let orders = JSON.parse(localStorage.getItem('qh_orders') || '[]');
        
        // Filter by status
        orders = orders.filter(o => (o.status || 'Chờ xác nhận') === statusFilter).reverse();
        
        if (orders.length === 0) {
            ordersList.innerHTML = '<div style="color: #888; text-align: center; padding: 60px 20px;">' +
                                   '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.5" style="margin-bottom: 15px;"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>' +
                                   '<div style="font-size: 15px; font-weight: 500;">Bạn chưa đặt mua sản phẩm nào!</div>' +
                                   '</div>';
            return;
        }

        let html = '<div style="display: flex; flex-direction: column; gap: 15px;">';
        orders.forEach(order => {
            const statusColor = order.status === 'Đã huỷ' ? '#e74c3c' : (order.status === 'Đã giao' ? '#27ae60' : '#f39c12');
            
            html += `
                <div style="border: 1px solid #eee; border-radius: 8px; padding: 20px; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #f9f9f9; padding-bottom: 12px; align-items: center;">
                        <span style="font-weight: 700; color: #333; font-size: 15px;">Đơn hàng #${order.id}</span>
                        <span style="color: ${statusColor}; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">${order.status || 'Chờ xác nhận'}</span>
                    </div>
                    
                    <!-- Order Items -->
                    <div style="margin-bottom: 15px;">
                        ${(order.items || []).map(item => `
                            <div style="display: flex; gap: 12px; margin-bottom: 10px; align-items: center;">
                                <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; border: 1px solid #f0f0f0;">
                                <div style="flex: 1;">
                                    <div style="font-size: 14px; font-weight: 600; color: #444;">${item.name}</div>
                                    <div style="font-size: 12px; color: #888;">x${item.quantity} - ${item.price.toLocaleString()}đ</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 12px; border-top: 1px dotted #eee;">
                        <div style="font-size: 12px; color: #999;">
                            Ngày đặt: ${order.date}<br>
                            <button class="admin-btn admin-btn-primary" style="margin-top: 8px; font-size: 11px; padding: 5px 10px;" onclick="downloadInvoice('${order.id}')">Tải hóa đơn PDF</button>
                        </div>
                        <div style="text-align: right;">
                            <span style="font-size: 13px; color: #666;">Thành tiền: </span>
                            <b style="color: var(--red); font-size: 18px;">${parseOrderTotal(order.total).toLocaleString()}đ</b>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        ordersList.innerHTML = html;
    }

    // ADMIN DASHBOARD LOGIC
    const adminOverlay = document.getElementById('adminOverlay');
    const adminPanelBtn = document.getElementById('adminPanelBtn');
    const closeAdminBtn = document.getElementById('closeAdminBtn');

    if (adminPanelBtn) {
        adminPanelBtn.addEventListener('click', () => {
            adminOverlay.classList.add('active');
            renderAdminProducts();
            renderAdminOrders();
            renderAdminUsers();
            loadSettings();
            updateAdminStats();
            renderRevenueChart();
        });
    }

    if (closeAdminBtn) {
        closeAdminBtn.addEventListener('click', () => {
            adminOverlay.classList.remove('active');
        });
    }

    // Tab Switching
    const adminTabs = document.querySelectorAll('.admin-tab');
    const adminSections = document.querySelectorAll('.admin-content-section');

    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-section');
            adminTabs.forEach(t => t.classList.remove('active'));
            adminSections.forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            // Render chart if stats tab selected
            if (target === 'adminStats') {
                renderRevenueChart();
            }
        });
    });

    // Render Admin Products
    let currentAdminFilter = 'all';

    function renderAdminProducts() {
        const tbody = document.getElementById('adminProductTableBody');
        if (!tbody) return;

        const categoryColors = {
            'Trang điểm': '#9b59b6',
            'Chăm sóc da mặt': '#2ecc71',
            'Chăm sóc cơ thể': '#3498db',
            'Tạo khối/Highlight': '#f1c40f',
            'Kem nền': '#e67e22',
            'Che khuyết điểm': '#e74c3c',
            'Chăm sóc tóc': '#1abc9c'
        };

        const filteredProducts = currentAdminFilter === 'all' 
            ? products 
            : products.filter(p => {
                if (currentAdminFilter === 'Trang điểm') {
                    return p.type === 'Trang điểm' || (p.category && p.category.includes('trang-diem'));
                }
                if (currentAdminFilter === 'Chăm sóc da mặt') {
                    return p.type === 'Chăm sóc da mặt' || p.category === 'skincare';
                }
                return p.type === currentAdminFilter;
            });

        tbody.innerHTML = filteredProducts.map(p => {
            const displayType = p.type || (p.category ? p.category.replace(/-/g, ' ').toUpperCase() : 'N/A');
            return `
            <tr>
                <td>${p.id}</td>
                <td><img src="${p.image}" width="40" height="40" style="object-fit: cover; border-radius: 4px;"></td>
                <td style="font-weight: 600;">${p.name}</td>
                <td>
                    <span style="background: ${categoryColors[p.type] || '#eee'}; color: ${categoryColors[p.type] ? 'white' : '#666'}; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 700; text-transform: uppercase;">
                        ${displayType}
                    </span>
                </td>
                <td>${p.brand}</td>
                <td style="color: var(--red); font-weight: 700;">${p.price.toLocaleString()}đ</td>
                <td>
                    <div style="display: flex; gap: 5px;">
                        <button class="admin-btn admin-btn-primary" onclick="editProduct(${p.id})">Sửa</button>
                        <button class="admin-btn admin-btn-danger" onclick="deleteProduct(${p.id})">Xóa</button>
                    </div>
                </td>
            </tr>
        `;}).join('');
        
        updateAdminStats();
    }

    // Add click listeners to summary cards
    document.querySelectorAll('.summary-card').forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.getAttribute('data-filter');
            if (filter) {
                currentAdminFilter = filter;
                
                // Visual feedback
                document.querySelectorAll('.summary-card').forEach(c => c.style.opacity = '0.6');
                card.style.opacity = '1';
                card.style.transform = 'scale(1.02)';
                setTimeout(() => card.style.transform = 'scale(1)', 200);

                renderAdminProducts();
            }
        });
    });

    function updateAdminStats() {
        // Lấy danh sách sản phẩm mới nhất từ LocalStorage thay vì mảng tĩnh
        const currentProds = JSON.parse(localStorage.getItem('qh_products')) || products;
        const total = currentProds.length;
        const makeup = currentProds.filter(p => p.type === 'Trang điểm' || (p.category && p.category.includes('trang-diem'))).length;
        const skincare = currentProds.filter(p => p.type === 'Chăm sóc da mặt' || p.category === 'skincare').length;
        const highlight = currentProds.filter(p => p.type === 'Tạo khối/Highlight').length;
        const foundation = currentProds.filter(p => p.type === 'Kem nền').length;
        const concealer = currentProds.filter(p => p.type === 'Che khuyết điểm').length;
        const haircare = currentProds.filter(p => p.type === 'Chăm sóc tóc').length;

        const totalEl = document.getElementById('statTotalProducts');
        const makeupEl = document.getElementById('statMakeup');
        const skincareEl = document.getElementById('statSkincare');
        const highlightEl = document.getElementById('statHighlight');
        const foundationEl = document.getElementById('statFoundation');
        const concealerEl = document.getElementById('statConcealer');
        const haircareEl = document.getElementById('statHaircare');

        if (totalEl) totalEl.textContent = total;
        if (makeupEl) makeupEl.textContent = makeup;
        if (skincareEl) skincareEl.textContent = skincare;
        if (highlightEl) highlightEl.textContent = highlight;
        if (foundationEl) foundationEl.textContent = foundation;
        if (concealerEl) concealerEl.textContent = concealer;
        if (haircareEl) haircareEl.textContent = haircare;

        const orders = JSON.parse(localStorage.getItem('qh_orders') || '[]');
        const revenue = orders.reduce((sum, order) => sum + parseOrderTotal(order.total), 0);

        const revenueEl = document.getElementById('statRevenue');
        if (revenueEl) revenueEl.textContent = revenue.toLocaleString() + 'đ';
    }

    // Render Admin Orders
    function renderAdminOrders() {
        const tbody = document.getElementById('adminOrderTableBody');
        const totalOrdersEl = document.getElementById('adminTotalOrders');
        const totalRevenueEl = document.getElementById('adminTotalRevenue');
        if (!tbody) return;
        
        const orders = JSON.parse(localStorage.getItem('qh_orders')) || [];
        const revenue = orders.reduce((sum, order) => sum + parseOrderTotal(order.total), 0);

        if (totalOrdersEl) totalOrdersEl.textContent = orders.length;
        if (totalRevenueEl) totalRevenueEl.textContent = revenue.toLocaleString() + 'đ';

        tbody.innerHTML = orders.map(o => {
            const itemsHtml = o.items ? o.items.map(i => `<div style="font-size: 11px;">- ${i.name} (x${i.qty})</div>`).join('') : 'N/A';
            const contactHtml = `
                <div style="font-size: 12px;">
                    <div><b>SĐT:</b> ${o.phone || 'N/A'}</div>
                    <div><b>Đ/C:</b> ${o.address || 'N/A'}</div>
                    ${o.email ? `<div><b>Email:</b> ${o.email}</div>` : ''}
                </div>
            `;

            return `
            <tr>
                <td style="font-weight: 700; color: var(--primary);">#${o.id}</td>
                <td>
                    <div style="font-weight: 600;">${o.customer}</div>
                    <div style="font-size: 11px; color: #888;">${o.paymentMethod || 'COD'}</div>
                </td>
                <td>${contactHtml}</td>
                <td>${itemsHtml}</td>
                <td style="font-size: 12px;">${o.date}</td>
                <td style="font-weight: 700; color: var(--red);">${parseOrderTotal(o.total).toLocaleString()}đ</td>
                <td>
                    <span style="background: ${o.status === 'Đã giao' ? '#e8f5e9' : '#fff3e0'}; 
                                 color: ${o.status === 'Đã giao' ? '#2e7d32' : '#ef6c00'}; 
                                 padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;">
                        ${o.status}
                    </span>
                </td>
                <td>
                    <div style="display: flex; gap: 5px;">
                        ${['Chờ xử lý', 'Chờ xác nhận'].includes(o.status) ? `<button class="admin-btn admin-btn-success" style="padding: 5px 10px; font-size: 11px;" onclick="confirmOrder(${o.id})">Xác nhận</button>` : ''}
                        <button class="admin-btn admin-btn-danger" style="padding: 5px 10px; font-size: 11px;" onclick="deleteOrder(${o.id})">Xóa</button>
                    </div>
                </td>
            </tr>
        `;}).reverse().join('');
    }

    // Order Logic
    window.confirmOrder = (id) => {
        let orders = JSON.parse(localStorage.getItem('qh_orders')) || [];
        orders = orders.map(o => o.id === id ? {...o, status: 'Đã giao'} : o);
        localStorage.setItem('qh_orders', JSON.stringify(orders));
        renderAdminOrders();
        showToast('Đã xác nhận đơn hàng!');
    };

    function renderAdminUsers() {
        const tbody = document.getElementById('adminUserTableBody');
        if (!tbody) return;
        const users = JSON.parse(localStorage.getItem('qh_users') || '[]');
        tbody.innerHTML = users.length > 0 ? users.map(u => `
            <tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td style="text-align: center;">
                    <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;">
                        Đang hoạt động
                    </span>
                </td>
            </tr>
        `).join('') : '<tr><td colspan="4" style="text-align:center; color:#888; padding: 18px 0;">Chưa có tài khoản đăng ký</td></tr>';
    }

    window.deleteOrder = (id) => {
        if (!confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) return;
        let orders = JSON.parse(localStorage.getItem('qh_orders')) || [];
        orders = orders.filter(o => o.id !== id);
        localStorage.setItem('qh_orders', JSON.stringify(orders));
        renderAdminOrders();
        showToast('Đã xóa đơn hàng!');
    };

    // Settings Logic
    const saveWebConfig = document.getElementById('saveWebConfig');
    const saveThemeConfig = document.getElementById('saveThemeConfig');
    const saveAdminPass = document.getElementById('saveAdminPass');

    if (saveWebConfig) {
        saveWebConfig.addEventListener('click', () => {
            const hotline = document.getElementById('setHotline').value;
            const email = document.getElementById('setEmail').value;
            if (hotline) localStorage.setItem('qh_hotline', hotline);
            if (email) localStorage.setItem('qh_email', email);
            applyWebConfig();
            showToast('Đã cập nhật cấu hình web!');
        });
    }

    if (saveThemeConfig) {
        saveThemeConfig.addEventListener('click', () => {
            const theme = document.getElementById('setTheme').value;
            localStorage.setItem('qh_theme', theme);
            applyTheme(theme);
            showToast('Đã áp dụng giao diện mới!');
        });
    }

    if (saveAdminPass) {
        saveAdminPass.addEventListener('click', () => {
            const newPass = document.getElementById('setAdminPass').value;
            if (newPass.length < 4) {
                showToast('Mật khẩu quá ngắn!');
                return;
            }
            localStorage.setItem('adminPass', newPass);
            showToast('Đã đổi mật khẩu admin!');
        });
    }

    function applyWebConfig() {
        const hotline = localStorage.getItem('qh_hotline') || '1900 636 510';
        const email = localStorage.getItem('qh_email') || 'contact@qhskinlab.com';
        
        const hHeader = document.getElementById('headerHotline');
        const hFooter = document.getElementById('footerHotline');
        const eFooter = document.getElementById('footerEmail');

        if (hHeader) hHeader.textContent = `Hotline: ${hotline}`;
        if (hFooter) hFooter.textContent = hotline;
        if (eFooter) eFooter.textContent = email;
    }

    function applyTheme(theme) {
        document.body.className = '';
        if (theme !== 'default') {
            document.body.classList.add(theme);
        }
    }

    function loadSettings() {
        document.getElementById('setHotline').value = localStorage.getItem('qh_hotline') || '1900 636 510';
        document.getElementById('setEmail').value = localStorage.getItem('qh_email') || 'contact@qhskinlab.com';
        document.getElementById('setTheme').value = localStorage.getItem('qh_theme') || 'default';
    }

    // Initial Apply
    applyWebConfig();
    applyTheme(localStorage.getItem('qh_theme') || 'default');

    // Product CRUD Logic
    const productModal = document.getElementById('productModalOverlay');
    const productForm = document.getElementById('productForm');
    const addNewProductBtn = document.getElementById('addNewProductBtn');
    const closeProductModal = document.getElementById('closeProductModal');

    if (addNewProductBtn) {
        addNewProductBtn.addEventListener('click', () => {
            document.getElementById('productModalTitle').textContent = 'Thêm sản phẩm mới';
            productForm.reset();
            document.getElementById('prodId').value = '';
            productModal.classList.add('active');
        });
    }

    if (closeProductModal) {
        closeProductModal.addEventListener('click', () => {
            productModal.classList.remove('active');
        });
    }

    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('prodId').value;
            const newProd = {
                id: id ? parseInt(id) : Date.now(),
                name: document.getElementById('prodName').value,
                brand: document.getElementById('prodBrand').value,
                price: parseInt(document.getElementById('prodPrice').value),
                image: document.getElementById('prodImg').value,
                type: document.getElementById('prodType').value,
                rating: 5,
                reviews: 0
            };

            if (id) {
                const index = products.findIndex(p => p.id === parseInt(id));
                products[index] = newProd;
            } else {
                products.push(newProd);
            }

            localStorage.setItem('qh_products', JSON.stringify(products));
            renderAdminProducts();
            renderProducts(); // Update homepage
            productModal.classList.remove('active');
            showToast('Đã lưu sản phẩm!');
        });
    }

    window.editProduct = (id) => {
        const p = products.find(prod => prod.id === id);
        if (!p) return;
        document.getElementById('productModalTitle').textContent = 'Sửa sản phẩm';
        document.getElementById('prodId').value = p.id;
        document.getElementById('prodName').value = p.name;
        document.getElementById('prodBrand').value = p.brand;
        document.getElementById('prodPrice').value = p.price;
        document.getElementById('prodImg').value = p.image;
        document.getElementById('prodType').value = p.type;
        productModal.classList.add('active');
    };

    window.deleteProduct = (id) => {
        if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            const index = products.findIndex(p => p.id === id);
            products.splice(index, 1);
            localStorage.setItem('qh_products', JSON.stringify(products));
            renderAdminProducts();
            renderProducts();
            showToast('Đã xóa sản phẩm!');
        }
    };

    // CHECKOUT LOGIC
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutSummaryItems = document.getElementById('checkoutSummaryItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Giỏ hàng của bạn đang trống!');
                return;
            }
            localStorage.setItem('qh_checkoutMode', 'cart');
            localStorage.removeItem('qh_directCheckoutItems');
            closeCart();
            window.location.href = 'checkout.html';
        });
    }

};

// Move these functions outside of initEvents to be globally accessible
function loadLastCheckoutInfo() {
    const orderName = document.getElementById('orderName');
    const orderPhone = document.getElementById('orderPhone');
    const orderEmail = document.getElementById('orderEmail');
    const orderAddress = document.getElementById('orderAddress');
    
    // Ưu tiên 1: Lấy thông tin từ tài khoản đang đăng nhập
    const currentEmail = localStorage.getItem('qh_userEmail');
    const users = JSON.parse(localStorage.getItem('qh_users') || '[]');
    const currentUser = users.find(u => u.email === currentEmail);

    const lastCheckout = JSON.parse(localStorage.getItem('qh_lastCheckout') || 'null');

    if (currentUser) {
        if (orderName) orderName.value = currentUser.name || '';
        if (orderEmail) orderEmail.value = currentUser.email || '';
        // Nếu tài khoản có phone/address thì điền vào luôn
        if (orderPhone && currentUser.phone) orderPhone.value = currentUser.phone;
        if (orderAddress && currentUser.address) orderAddress.value = currentUser.address;
    } 
    // Ưu tiên 2: Nếu không có profile thì mới lấy từ lần mua cuối (cho khách vãng lai)
    else if (lastCheckout) {
        if (orderName) orderName.value = lastCheckout.name || '';
        if (orderPhone) orderPhone.value = lastCheckout.phone || '';
        if (orderEmail) orderEmail.value = lastCheckout.email || '';
        if (orderAddress) orderAddress.value = lastCheckout.address || '';
    }
}

function saveCheckoutInfo(name, phone, email, address) {
    const checkoutInfo = { name, phone, email, address, timestamp: Date.now() };
    localStorage.setItem('qh_lastCheckout', JSON.stringify(checkoutInfo));
}

function initCheckoutListeners() {
    const checkoutForm = document.getElementById('checkoutForm');
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const checkoutOverlay = document.getElementById('checkoutOverlay');

    if (closeCheckoutBtn && checkoutOverlay) {
        closeCheckoutBtn.addEventListener('click', () => {
            checkoutOverlay.classList.remove('active');
            checkoutOverlay.style.display = 'none';
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
                
                const name = document.getElementById('orderName').value;
                const phone = document.getElementById('orderPhone').value;
                const email = document.getElementById('orderEmail').value;
                const address = document.getElementById('orderAddress').value;
                const note = document.getElementById('orderNote').value;
                const payment = document.getElementById('orderPaymentMethod').value;
                
                // Save checkout info for next time
                saveCheckoutInfo(name, phone, email, address);
                
                const total = currentCheckoutItems.reduce((sum, i) => sum + (i.price * i.quantity), 0);
                const orderId = Math.floor(Math.random() * 1000000);

                const completeOrder = () => {
                    const newOrder = {
                        id: orderId,
                        customer: name,
                        phone: phone,
                        email: email,
                        address: address,
                        note: note,
                        paymentMethod: payment,
                        items: currentCheckoutItems.map(i => ({ 
                            name: i.name, 
                            quantity: i.quantity, 
                            price: i.price,
                            image: i.image 
                        })),
                        date: new Date().toLocaleString(),
                        total: total,
                        status: 'Chờ xác nhận'
                    };

                    // Save Order
                    const orders = JSON.parse(localStorage.getItem('qh_orders')) || [];
                    orders.push(newOrder);
                    localStorage.setItem('qh_orders', JSON.stringify(orders));

                    // Clear Cart only if it was a cart checkout
                    if (!isDirectCheckout) {
                        cart = [];
                        localStorage.setItem('qh_cart', JSON.stringify(cart));
                        updateCartUI();
                    }

                    // Success View
                    const checkoutSuccess = document.getElementById('checkoutSuccess');
                    const checkoutQR = document.getElementById('checkoutQR');
                    if (checkoutSuccess) {
                        checkoutForm.style.display = 'none';
                        if (checkoutQR) checkoutQR.style.display = 'none';
                        checkoutSuccess.style.display = 'block';
                        
                        document.getElementById('successOrderId').textContent = newOrder.id;
                        document.getElementById('successOrderTotal').textContent = Number(newOrder.total).toLocaleString() + 'đ';
                        document.getElementById('successOrderItems').innerHTML = newOrder.items.map(item => `
                            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:14px;">
                                <span>${item.name} x${item.quantity}</span>
                                <span>${(item.price * item.quantity).toLocaleString()}đ</span>
                            </div>
                        `).join('');
                    } else {
                        checkoutOverlay.classList.remove('active');
                        showToast('Đặt hàng thành công!');
                    }
                    checkoutForm.reset();
                };

                if (payment === 'BANK') {
                    const checkoutQR = document.getElementById('checkoutQR');
                    const qrCodeImg = document.getElementById('qrCodeImg');
                    const qrAmount = document.getElementById('qrAmount');
                    const qrNote = document.getElementById('qrNote');
                    const confirmQRBtn = document.getElementById('confirmQRBtn');
                    const cancelQRBtn = document.getElementById('cancelQRBtn');

                    if (checkoutQR) {
                        checkoutForm.style.display = 'none';
                        checkoutQR.style.display = 'block';
                        
                        if (qrAmount) qrAmount.textContent = total.toLocaleString() + 'đ';
                        if (qrNote) qrNote.textContent = 'QH' + orderId;
                        if (qrCodeImg) {
                            qrCodeImg.src = `https://api.vietqr.io/image/vietcombank/0011004123456/qr_only.jpg?amount=${total}&addInfo=QH${orderId}&accountName=NGUYEN THI THANH HIEN`;
                        }

                        confirmQRBtn.onclick = () => {
                            completeOrder();
                        };

                        cancelQRBtn.onclick = () => {
                            checkoutQR.style.display = 'none';
                            checkoutForm.style.display = 'block';
                        };
                    } else {
                        completeOrder();
                    }
                } else {
                    completeOrder();
                }
            });
        }
}

// Ensure checkout listeners are initialized
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheckoutListeners);
} else {
    initCheckoutListeners();
}


    // Back to Top
    const btt = document.getElementById('backToTop');
    if (btt) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) btt.classList.add('active');
            else btt.classList.remove('active');
        });
        btt.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

function updateUserDisplay(user) {
    if (!user) return;
    isLoggedIn = true;
    currentUserName = user.name;
    currentUserEmail = user.email;
    
    localStorage.setItem('qh_isLoggedIn', 'true');
    localStorage.setItem('qh_userName', user.name);
    localStorage.setItem('qh_userEmail', user.email);
    
    const display = document.getElementById('userNameDisplay');
    const adminBtn = document.getElementById('adminPanelBtn');
    if (display) {
        display.textContent = user.name;
        display.style.display = 'inline-block';
    }
    if (user.name === 'admin' && adminBtn) {
        adminBtn.style.display = 'flex';
    }

    // Update Profile Overlay Info
    const profileUserName = document.getElementById('profileUserName');
    const profileUserEmail = document.getElementById('profileUserEmail');
    const profileAvatar = document.getElementById('profileAvatar');
    const infoName = document.getElementById('infoName');
    const infoEmail = document.getElementById('infoEmail');

    if (profileUserName) profileUserName.textContent = user.name;
    if (profileUserEmail) profileUserEmail.textContent = user.email;
    if (infoName) infoName.textContent = user.name;
    if (infoEmail) infoEmail.textContent = user.email;
    
    if (profileAvatar && user.name) {
        profileAvatar.textContent = user.name.substring(0, 2).toUpperCase();
    }
}

window.toggleWishlist = function(id) {
    const index = wishlist.indexOf(id);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Đã xóa khỏi yêu thích');
    } else {
        wishlist.push(id);
        showToast('Đã thêm vào yêu thích');
    }
    localStorage.setItem('qh_wishlist', JSON.stringify(wishlist));
    
    // Cập nhật giao diện trái tim cho mọi nơi có sản phẩm này trên trang mà không reload
    const isActive = wishlist.includes(id);
    const buttons = document.querySelectorAll(`button[onclick*="toggleWishlist(${id})"]`);
    
    buttons.forEach(btn => {
        btn.classList.toggle('active', isActive);
        const svg = btn.querySelector('svg');
        if (svg) {
            svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
        }
    });
    
    // Nếu đang mở tab "Sản phẩm yêu thích", thực hiện render lại danh sách trong tab đó
    const favoritesTab = document.getElementById('tab-favorites');
    if (favoritesTab && favoritesTab.classList.contains('active')) {
        renderFavorites();
    }
};

window.trackProductView = function(productId) {
    let viewed = JSON.parse(localStorage.getItem('qh_recentlyViewed')) || [];
    viewed = viewed.filter(id => id !== productId);
    viewed.unshift(productId);
    if (viewed.length > 10) viewed = viewed.slice(0, 10);
    localStorage.setItem('qh_recentlyViewed', JSON.stringify(viewed));
};

function openCart() { 
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.add('active'); 
}
function closeCart() { 
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.remove('active'); 
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>${msg}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Function to check if user has purchased the product
function hasUserPurchasedProduct(productId) {
    if (!isLoggedIn || !currentUserEmail) return false;
    const orders = JSON.parse(localStorage.getItem('qh_orders')) || [];
    return orders.some(order => 
        order.email === currentUserEmail && 
        order.items.some(item => Number(item.id) === Number(productId))
    );
}

// Function to add review
function addReview(productId, rating, text) {
    if (!reviews[productId]) {
        reviews[productId] = [];
    }

    reviews = JSON.parse(localStorage.getItem('qh_reviews')) || {}; // Refresh from disk
    const newReview = {
        user: currentUserName,
        rating: parseInt(rating),
        text: text,
        date: new Date().toLocaleDateString('vi-VN')
    };
    reviews[productId].push(newReview);
    localStorage.setItem('qh_reviews', JSON.stringify(reviews));
}

// Function to render reviews for product
function renderReviews(productId) {
    const reviewList = document.querySelector('.reviews-list');
    if (!reviewList) return;

    reviewList.innerHTML = ''; // Xóa sạch các đánh giá cũ (đánh giá mẫu trong HTML)
    const productReviews = reviews[productId] || [];
    productReviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-header">
                <div class="user-info">
                    <span class="username">${review.user}</span>
                    <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        reviewList.appendChild(reviewItem);
    });
}

// Function to show/hide add review form
function toggleAddReviewForm(productId) {
    const form = document.getElementById('addReviewForm');
    const msg = document.createElement('p');
    msg.id = 'reviewNotice';
    msg.style.cssText = 'color: #888; font-size: 14px; font-style: italic; margin-top: 20px;';
    
    if (!form) return;
    const existingNotice = document.getElementById('reviewNotice');
    if (existingNotice) existingNotice.remove();

    const hasPurchased = hasUserPurchasedProduct(productId);
    form.style.display = hasPurchased ? 'block' : 'none';

    if (!isLoggedIn) {
        msg.innerText = 'Vui lòng đăng nhập để đánh giá sản phẩm.';
        form.parentNode.insertBefore(msg, form);
    } else if (!hasPurchased) {
        msg.innerText = 'Bạn chỉ có thể đánh giá sản phẩm sau khi đã mua hàng.';
        form.parentNode.insertBefore(msg, form);
    }
}

// Event listener for review form
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const rating = document.querySelector('input[name="rating"]:checked');
            const text = document.getElementById('reviewText').value;
            if (!rating || !text.trim()) {
                alert('Vui lòng điền đầy đủ thông tin đánh giá.');
                return;
            }
            const productId = parseInt(localStorage.getItem('selectedProductId'));
            if (productId) {
                addReview(productId, rating.value, text);
                reviewForm.reset();
                renderReviews(productId);
                showToast('Cảm ơn bạn đã đánh giá sản phẩm!');
            }
        });
    }
    
    // On product detail page load
    const productId = parseInt(localStorage.getItem('selectedProductId'));
    if (productId) {
        renderReviews(productId);
        toggleAddReviewForm(productId);
    }
});

/**
 * Render Related Products based on Category or Brand
 */
window.renderRelatedProducts = function(currentProduct) {
    const grid = document.getElementById('relatedProductsGrid');
    if (!grid || !currentProduct) return;

    const allProducts = JSON.parse(localStorage.getItem('qh_products')) || products;
    
    // Filter products with same category or brand, excluding the current one
    let related = allProducts.filter(p => 
        p.id !== currentProduct.id && 
        (p.category === currentProduct.category || p.brand === currentProduct.brand)
    );

    // Fallback: If not enough related products, fill with others
    if (related.length < 4) {
        const relatedIds = related.map(p => p.id);
        const others = allProducts.filter(p => p.id !== currentProduct.id && !relatedIds.includes(p.id));
        related = [...related, ...others];
    }

    grid.innerHTML = related.slice(0, 4).map(p => createProductCard(p)).join('');
};

/**
 * Download Order Invoice as PDF
 */
window.downloadInvoice = function(orderId) {
    const orders = JSON.parse(localStorage.getItem('qh_orders') || '[]');
    const order = orders.find(o => String(o.id) === String(orderId));

    if (!order) {
        showToast('Không tìm thấy đơn hàng!');
        return;
    }

    if (!window.jspdf) {
        showToast('Đang tải thư viện PDF, vui lòng thử lại sau!');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Generate PDF content (using removeAccents for compatibility)
    doc.setFontSize(22);
    doc.text('HOA DON BAN HANG', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Ma don hang: #${order.id}`, 20, 40);
    doc.text(`Ngay dat: ${order.date}`, 20, 48);
    doc.text(`Khach hang: ${removeAccents(order.customer)}`, 20, 56);
    doc.text(`Dien thoai: ${order.phone || 'N/A'}`, 20, 64);
    doc.text(`Dia chi: ${removeAccents(order.address || 'N/A')}`, 20, 72);

    const tableData = (order.items || []).map(item => [
        removeAccents(item.name),
        item.quantity,
        parseOrderTotal(item.price).toLocaleString() + 'd',
        (parseOrderTotal(item.price) * item.quantity).toLocaleString() + 'd'
    ]);

    doc.autoTable({
        startY: 80,
        head: [['San pham', 'SL', 'Don gia', 'Thanh tien']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [93, 173, 226] } // Màu var(--primary)
    });

    const finalY = doc.lastAutoTable.finalY || 80;
    doc.setFontSize(14);
    doc.text(`TONG CONG: ${parseOrderTotal(order.total).toLocaleString()}d`, 190, finalY + 15, { align: 'right' });

    doc.save(`HoaDon_QH_${order.id}.pdf`);
    showToast('Đang tải hóa đơn PDF...');
};
