const form = document.getElementById('searchForm');
const input = document.getElementById('keyword');
const msg = document.getElementById('searchMsg');

function validate(){
  const v = input.value.trim();
  if(v === '') return 'Vui lòng nhập từ khóa tìm kiếm.';
  if(v.length < 2) return 'Từ khóa phải có ít nhất 2 ký tự.';
  if(v.length > 50) return 'Từ khóa không được dài quá 50 ký tự.';
  if(/[<>{}\[\]\\\/$%^*=+|~`]/.test(v)) return 'Từ khóa chứa ký tự không hợp lệ.';
  return '';
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  const err = validate();
  msg.classList.remove('ok');
  if(err){
    msg.textContent = err;
    input.classList.add('invalid');
    input.focus();
  }else{
    input.classList.remove('invalid');
    msg.textContent = 'Đang tìm: "' + input.value.trim() + '"';
    msg.classList.add('ok');
  }
});

input.addEventListener('input', function(){
  input.classList.remove('invalid');
  msg.textContent = '';
});
