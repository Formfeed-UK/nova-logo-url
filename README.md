# Nova 4 Logo Url

This [Laravel Nova](https://nova.laravel.com/) package adds the ability to set a custom link address, image source, and class for your main App Logo in Nova 4

## Requirements

- `php: ^7.3|^8.0`
- `laravel/nova: ^4.0`

## Features

- Custom Logo URL
- Custom Dark Mode logo URL
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
        'logo_src' => 'https://mydomain.com/img/mylogo.png',
        'logo_src_dark' => 'https://mydomain.com/img/mylogo-dark.png', // optional
        'logo_href' => 'https://google.com',
        'logo_class' => 'h-10',
        ...
    ]

...

]
```

### Deprecated Configuration Options

Please note that as of 2.0.0 the following configuration options are now deprecated, and will be removed in a future release, please see the new configuration options above.

```
'logo_url'
'logo_link'
```

### Known Issues
- Internal links will result in a full page load rather than following an Inertia Link
- Due to the way Nova loads package scripts, this will not work for the login page, I recommend using your own login (or breeze or similar) and overriding the login links:

```php
    // config/nova.php
    'routes' => [
        'login' => '/login',
        'logout' => '/logout',
        'register' => '/register',
        'forgot_password' => '/forgot_password',
        'reset_password' => '/reset_password'
    ],
```


## License

Nova Logo Url is open-sourced software licensed under the [MIT license](LICENSE.md).
