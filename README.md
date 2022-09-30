## Giriş

#### Hakkında
Bu bot discord.js v14 versiyonu ile yazılmıştır, özellikleri;
- Kategorili komutlar
- Daha hızlı mesaj yazdırma fonksiyonları
- Düzenli konsol çıktıları
- Gelişmiş yetkilendirme

İndirdiğiniz klasörün içindeki start.bat botu başlatır, ama başlattığınız zaman karşınıza çok sayıda konsol hatası gelecektir.
bunlar tam olarak hata değildir, bize sadece eksik modül olduğunu yazdırır, ve bizim gerekli modülleri indirmemiz gerekir.
- ##### Tüm modülleri aynı anda kurma:
package.json'un bulunduğu konuma gelip `Shift + Sağ Tık` yapın orada `Powershell` veya `CMD` açma seçeneği gelecek, ona tıklayın ve alttaki komutu girin.
```bat
npm install
```
- ##### Nasıl modül indirilir?:
İlk önce starter.bat ile botu çalıştırıp bizim için lazım olan modülleri öğrenelim, bunun için aşşağıdaki konsol çıktısına uyarak modülümüzün adını öğrenelim, alttaki konsol çıktısı bazı durumlara göre değişiklik gösterebilir,
```bat
Error: Cannot find module 'discord.js'
```
modülümüzün adı tırnak işaretleri arasında gösterilmektedir, şimdi bu modulü nasıl indireceğimize gelelim, ilk önce indirdiğiniz klasörün içine gelip `Shift + Sağ Tık` yapıp Powershell veya Cmd penceresini açalım, ve içine aşşağıdaki modül indirmek için gerekli kodu yazalım,
```bat
npm install discord.js
```

## Kullanım
- ##### ready.js kullanımı
İndirdiğiniz klasörün içinde events klasöründeki ready.js adlı dosyayı açıyoruz,
şimdi bota yeni presence eklemek için ne yapmanız gerektiğini anlatıyorum,
aşşağıdaki taslaktaki gibi,
```javascript
  var rich = [
	  `deneme1`,
	  `deneme2`,
	  `deneme3`,
	  `deneme4`
  ];
```
deneme adlı satırları arttırarak yeni presence ekleyebilirsiniz, sınır yoktur!
##### Ek olarak;
```javascript
client.user.setActivity(rich[random], "online");
```
yukarıdaki kod ile botun durumunu değiştirebilirsiniz,
###### `online` - bot durumu online olur
###### `idle` - bot durumu boşta olur
###### `dnd` - bot durumu rahatsız etmeyin olur
üstteki kod satırında sadece tırnak işareti arasındaki yazıyı değişin aksi taktirde bot presence çalışmayabilir.

- ##### configs.json kullanımı
İndirdiğiniz klasörün içindeki configs.json dosyasını açın, ve içindeki bilgileri doğru bir şekilde doldurunuz

- ##### Yeni komut ekleme
İndirdiğiniz klasörün içindeki events klasörüne yeni bir js uzantılı dosya ekliyoruz, dosya adını türkçe karakter içermeden koymak yararınıza olacaktır, sonrasında dosyanın içine aşşağıdaki taslağı yapıştırıyoruz,

```javascript
//...
/*^^^^gerekli modüllerin ekleneceği kısım^^^^*/

exports.run = async(client, message, args, conf, Discord, functions) => {
 // işler kodların bulunacağı yer eğer burada hiç birşey yoksa komutta doğal olarak bir yanıt göndermeyecektir, ve herhangi bir konsol çıktısı göndermez.
};

exports.conf = {
	aliases: [], // komutu yeni kısayollar eklemek için kullanılır köşeli parantezin içine "tmn","kz","test" şeklinde eklemelisiniz.
	permLevel: 0 // komutu kullanmak için gerekli yetki seviyesi 0 herkesin kullanabilmesi demek.
};

exports.help = {
	name: 'deneme',
	description: 'bu komut ne işe yarar.',
	usage: 'komut nasıl kullanılır örn : deneme <id> gibi.'
};
```
bu şekilde çoğaltarak kullanabilirsiniz.

## Ek Bağlantılar
#### Discord:
Developer Discord: `T3IM4N#2000`

## Lisans
Bu yazılım MIT ile lisanslanmıştır, izinsiz kendi yazlımınızmış gibi paylaşmanız dahilinde işlem başlatılır.
