from rest_framework.routers import DefaultRouter

router = DefaultRouter()

# router.register(r'', RecipesList, basename='recipes_list')

user_patterns = [
                ] + router.urls

urlpatterns = user_patterns
