# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller method of index is the "R" in CRUD and the http verb associated with index is "GET".
class BlogPostsController < ApplicationController
  def index

    # ---2) The line below is declaring an instance variable that is set by using the "@" before the name. This will return all blog posts. Note that posts is plural.
    @posts = BlogPost.all
  end

  # ---3) This line will require an :id and the show method  will return one post only. Used for listing one item in a model/show one. Associated with get.

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New represents the midway point between C and R in CRUD. Rails convention is that this route displays a form to the user.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create represents the C in CRUD and is the Rails convention for adding information to the database and the verb associated with create is POST. In this case we have a conditional to check if post is valid.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This has a method named edit that returns one post based by :id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update represents the U in CRUD and is the Rails convention for modyfying information. Associated with the HTTP verb PUT/PATCH
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Conditional esle that will redirect and render the blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Using PRIVATE method to restrict asccess to the blog_post_params.
  private
  def blog_post_params
    # ---10) This allows the user to interact with only the :title and :content becasue the use of ".permit"
    params.require(:blog_post).permit(:title, :content)
  end
end
