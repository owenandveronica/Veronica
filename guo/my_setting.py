def get_static_url(file_style):
  file_style = file_style
  if file_style == "js":
    return "/javascript"
  if file_style == "css":
    return "/style"
  if file_style == "img":
    return "/img"
  if file_style == "node_modules":
    return "/node_modules"
