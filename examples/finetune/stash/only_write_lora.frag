  // TODO extract this
  // if (trainer.params.only_write_lora) {
  //     save_train_files_data save_data;
  //     save_data.fn_checkpoint_out = "";
  //     save_data.fn_lora_out       = trainer.params.fn_lora_out;
  //     save_data.pattern_fn_it     = trainer.params.common.pattern_fn_it;
  //     save_data.fn_latest         = trainer.params.common.fn_latest;
  //     save_data.model             = &trainer.model;
  //     save_data.lora              = &trainer.lora;

  //    save_train_files(&save_data, trainer.train);

  //    free_train_state(trainer.train);
  //    ggml_free(trainer.lora.ctx);
  //    llama_free(trainer.lctx);
  //    llama_free_model(trainer.lmodel);
  //    return ;
  //}
