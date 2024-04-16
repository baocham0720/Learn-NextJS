NextJs Tutorial
Tài liệu biên soạn theo NextJs App Router

Doc: https://nextjs.org/docs

Change logs: https://nextjs.org/blog

Carousel cho NextJS: https://www.embla-carousel.com/examples/predefined

Link tham khảo
https://sohamr.hashnode.dev/nextjs-13-everything-you-need-to-know

Dự án tham khảo
https://github.com/vercel/commerce



Khi nào thì dùng getStaticProps, getServerSideProps

1. getStaticProps:
 - Nội dung rất lâu mới thay đổi 1 lần. thì ko cần cấu hình revalidate
 - Nội dung thay đổi hàng ngày. Cấu hình thêm revalidate
2. getServerSideProps:
 - Cần nội dung cập nhật tức thì: chứng khoán

3. Cần nắm các khái niệm Render
 - SSR (server side rendering) là gì
 - SSG (site static generate) là gì
 - CSR (client slide rendering) là gì

  getStaticPath() để làm gì? getStaticPath --> luôn đi cùng getStaticProps