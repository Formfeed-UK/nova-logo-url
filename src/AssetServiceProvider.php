<?php

namespace Formfeed\NovaLogoUrl;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class AssetServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-logo-url', __DIR__.'/../dist/js/asset.js');
            Nova::style('nova-logo-url', __DIR__.'/../dist/css/asset.css');

            Nova::provideToScript([
                "logoUrl" => config("nova.brand.logo_url", false),
                "logoLink" => config("nova.brand.logo_link", false),
                "logoClass" => config("nova.brand.logo_class", false),
            ]);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
