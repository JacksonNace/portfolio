provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "portfolio_site" {
  name     = "jenportfolio"
  location = "East US 2"
}

resource "azurerm_static_web_app" "web" {
  name                = "static-jackson"
  resource_group_name = azurerm_resource_group.portfolio_site.name
  location            = "East US 2"
  sku_tier            = "Free"
  sku_size            = "Free"
}
