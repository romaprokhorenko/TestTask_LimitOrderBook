from rest_framework.routers import DefaultRouter

from .views import GetMyOrders, CreateOrder

router = DefaultRouter()

router.register(r'get_order', GetMyOrders, basename='get_active_orders')
router.register(r'create_order', CreateOrder, basename='get_active_orders')

user_patterns = [
                ] + router.urls

urlpatterns = user_patterns
