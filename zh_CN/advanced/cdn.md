# CDN

目前和V2Ray兼容的CDN国外有Cloudflare，国内阿里云，这两家的CDN是支持WebSocket的。剩下的几家不支持WebSocket，也不会keep TCP connection。因此HTTP/2回源也不支持（访问支持HTTP/2和回源支持HTTP/2是两回事）。
另外，使用国内CDN需要域名备案并服务商实名认证。使用有风险，入坑需谨慎。

## 配置

参照WebSocket + TLS + Web部分。

#### 更新历史

- 2018-03-18 初版
- 2019-10-23 Update