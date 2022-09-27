# Nova 4 Logo Url

This [Laravel Nova](https://nova.laravel.com/) package adds the ability to set a custom link address, image source, and class for your main App Logo in Nova 4

## Requirements

- `php: ^7.3|^8.0`
- `laravel/nova: ^4.0`

## Features

- Custom Logo URL
- Custom Logo Link Url
- Custom Logo Class

## Installation

Install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require formfeed-uk/nova-logo-url
```

## Usage

### Configuration Options

To configure the logo options, add the following to your `config/nova.php`

```php
// config/nova.php

return [

...

    'brand' => [
        ...
        'logo_url' => 'https://mydomain.com/img/mylogo.png',
        'logo_link' => 'https://google.com',
        'logo_class' => 'h-10',
        ...
    ]

...

]
```

### Known Issues
- Internal links will result in a full page load rather than following an Inertia Link


## License

Nova Logo Url is open-sourced software licensed under the [MIT license](LICENSE.md).
