# Documentation

You'll find guides for beginners and advanced users. 
Covering the configuration of the core system, addons for data sync and others. 


#### Minimal configuration
```json
{
  "internal_url": "192.168.0.1",
  "external_url": "external.url.com",
  "data_dir": "data",
  "addons": []
}
```

| Properties          | Description                          |
| ------------------- | ------------------------------------ |
| `internal_url`      | Indicates the internal network address. |
| `external_url`      | The external network address e.g.: used to create links for sharing. |
| `data_dir`          | Path where all the data will be stored. |
| `addons`            | List of addons and their custom configurations. |
