import struct, zlib

def create_png(path, w=1200, h=630, r=30, g=30, b=30):
    def chunk(ctype, data):
        c = ctype + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)
    raw = b''
    for y in range(h):
        raw += b'\x00' + bytes([r, g, b]) * w
    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0))
    idat = chunk(b'IDAT', zlib.compress(raw))
    iend = chunk(b'IEND', b'')
    with open(path, 'wb') as f:
        f.write(sig + ihdr + idat + iend)

create_png('public/images/asio-china-critical-infrastructure-probing/article-guardian-burgess-featured.jpg', r=20, g=25, b=35)
create_png('public/images/asio-china-critical-infrastructure-probing/article-reuters-burgess-lowy.jpg', r=25, g=30, b=40)
create_png('public/images/asio-china-critical-infrastructure-probing/article-asio-annual-threat-assessment.png', r=30, g=35, b=45)

create_png('public/images/sandworm-dynowiper-polish-power-grid/article-theregister-featured.jpg', r=35, g=20, b=20)
create_png('public/images/sandworm-dynowiper-polish-power-grid/article-dragos-ders-targeting.png', r=40, g=25, b=25)
create_png('public/images/sandworm-dynowiper-polish-power-grid/article-certpl-affected-sites.png', r=45, g=30, b=30)

create_png('public/images/managemyhealth-nz-healthcare-breach/article-rnz-featured.jpg', r=20, g=35, b=25)
create_png('public/images/managemyhealth-nz-healthcare-breach/article-rnz-managemyhealth-notice.png', r=25, g=40, b=30)
create_png('public/images/managemyhealth-nz-healthcare-breach/article-rnz-gp-practices.jpg', r=30, g=45, b=35)

print('All placeholder images created')
